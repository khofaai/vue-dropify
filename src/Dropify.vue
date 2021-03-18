<template>
	<div
		class="vue-dropify"
		:class="{ 'full': full, 'is-disabled': disabled }"
		:style="{ 'height': height, 'width': width }"
	>
		<input v-if="!loading" type="file" class="vue-dropify__input" :accept="accept" :multiple="isMultiple" @change="onFilesUpload" @click="preventIfDisabled($event)" />

		<div class="vue-dropify__message">
			<slot v-if="imagesLength === 0">
				<span class="vue-dropify__icon" :class="uploadIcon" />
				<p>{{ dropifyMessage }}</p>
			</slot>
		</div>

		<div class="vue-dropify-wrapper" :class="{ 'on': imagesLength > 0, 'is-multiple': !multiple }">
			<div v-if="imagesLength > 0" class="vue-dropify-wrapper__body">
				<div v-for="(image,i) in imagesValues" :key="i" class="vue-dropify-wrapper__item">
					<div
						class="vue-dropify-img"
						:id="`vue-dropify-img-${i}`"
						:style="{ 'height': height, 'width': calculatedWidth}">
						<span @click="removeImage(i)" :class="{'has-icon': removeIcon !== ''}">
							<i v-if="removeIcon && removeIcon !== ''" :class="removeIcon" title="remove" />
							<svg v-else version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
									width="41.756px" height="41.756px" viewBox="0 0 41.756 41.756" style="enable-background:new 0 0 41.756 41.756;"
									xml:space="preserve">
								<g>
									<path d="M27.948,20.878L40.291,8.536c1.953-1.953,1.953-5.119,0-7.071c-1.951-1.952-5.119-1.952-7.07,0L20.878,13.809L8.535,1.465
										c-1.951-1.952-5.119-1.952-7.07,0c-1.953,1.953-1.953,5.119,0,7.071l12.342,12.342L1.465,33.22c-1.953,1.953-1.953,5.119,0,7.071
										C2.44,41.268,3.721,41.755,5,41.755c1.278,0,2.56-0.487,3.535-1.464l12.343-12.342l12.343,12.343
										c0.976,0.977,2.256,1.464,3.535,1.464s2.56-0.487,3.535-1.464c1.953-1.953,1.953-5.119,0-7.071L27.948,20.878z"/>
								</g>
							</svg>
						</span>
						<img v-if="isImage(image)" :src="image" />
						<i v-else class="el-icon-loading" />
					</div>
				</div>
			</div>
		</div>
		<button v-if="!loading && imagesLength > 1" type="button" class="vue-dropify-remove" @click.self="removeImageAll">{{ clearMessage }}</button>
		<i v-if="loading" class="el-icon-loading" />
	</div>
</template>
<script>
export default {
	name: 'vue-dropify',

	props: {
		default: {
			default: null,
		},
		full: {
			type: Boolean,
			default: false,
		},
		message: {
			type: String,
			default: null,
		},
		height: {
			default: '',
		},
		width: {
			default: 'auto',
		},
		loading: {
			type: Boolean,
			default: false,
		},
		accept: {
			default: 'image/*',
		},
		multiple: {
			type: Boolean,
			default: false,
		},
		size: {
			default: null,
		},
		unit: {
			default: null,
		},
		uploadIcon: {
			default: '',
		},
		removeIcon: {
			default: null,
		},
		text: {
			default: () => ({})
		},
		value: {
			default: null,
			type: [FileList, Array, Object, String]
		},
		src: {
			default: '',
			type: String,
		},
		disabled: {
			default: false,
			type: Boolean,
		}
	},

	data() {
		return {
			reader: null,
			images: {},
			sizeUnit: 'kb',
			maxSize: null,
			dropifyMessage: 'Drop image here or click to select',
			defaultImageWidth: 185,
			sizeValues: {
				b: 1,
				kb: 1024,
				mb: 1024 * 1024
			}
		}
	},

	methods: {
		isImage(image) {
			return typeof image !== 'object';
		},

		expend(index) {
			const wrapper = document.querySelector('#vue-dropify-img-' + index);
			if (!wrapper) return;
			if (wrapper.style.width === 'auto') {
				wrapper.style.width = `${this.defaultImageWidth}px`;
			} else {
				wrapper.style.width = 'auto';
			}
		},

		onFilesUpload(e) { // validate files before add them to dropify zone
			const files = e.target.files || e.dataTransfer.files;
			if (!files.length) return;
			const tmpObj = {};
			for (let i = 0; i < files.length; i++) {
				tmpObj[i] = {};
			}
			this.images = { ...tmpObj };
			this.createImage(files);
			this.emitChanges(files);
			/**
				* @deprecated
			*/
			this.$emit('upload', files);
		},

		createImage(files) { // create image instance on dropify zone
			[...files].forEach((file, index) => {
				if (this.checkFileSize(file)) {
					this.initFileReader(index, reader => {
						reader.readAsDataURL(file);
						this.emitChanges(this.images);
					});
				}
			});
		},

		checkFileSize(file) { // check file size before create reader instance
			let convertSize = (size) => size * this.sizeValues[this.sizeUnit];
			if (Array.isArray(this.maxSize) && this.maxSize.length === 2) {
				let minSize = convertSize(maxSize[0]);
				let maxSize = convertSize(maxSize[1]);
				return file.size >= minSize && file.size <= maxSize;
			}
			if (this.maxSize !== null) {
				return file.size <= this.maxSize * this.sizeValues[this.sizeUnit];
			}
			return true;
		},

		removeImage (position) { // remove target image instance from dropify
			delete this.images[position];
			this.images = {...this.images};
			this.$emit('image-removed', position);
			this.emitChanges(this.images);
			/**
				* @deprecated
			*/
			this.$emit('upload', this.images);
		},

		removeImageAll () { // remove all images from dropify
			this.images = {};
			this.$emit('image-removed', null);
			this.emitChanges(this.images);
			/**
				* @deprecated
			*/
			this.$emit('upload', []);
		},

		initMessage() { // set custom dropify message
			if (typeof this.message !== 'undefined' && this.message !== null) {
				this.dropifyMessage = this.message
			}
		},

		setMaxSize() { // set max image size to be uploaded
			if (this.size !== null) {
				this.maxSize = this.size;
			}
		},

		setSizeUnit() { // change image size unit from `kb` to custom one
			if (typeof this.sizeValues[this.unit] !== 'undefined') {
				this.sizeUnit = this.unit;
			}
		},

		setImageSrc() {
			if (this.src !== '') {
				this.images = {
					src: this.src,
				}
			}
		},

		initFileReader(index, callback) { // init file upload to dropify
			let reader = new FileReader();
			reader.onload = (e) => {
				if (!this.isMultiple && this.images.length > 0) {
					this.removeImage(0)
				}
				this.images[index] = e.target.result;
				this.images = {...this.images};
			};
			callback(reader);
		},

		emitChanges(images) {
			if (typeof images[0] === 'undefined') {
				images = [];
			}
			this.$emit('input', images);
			this.$emit('change');
		},

		preventIfDisabled(e) {
			if (this.disabled) {
				e.preventDefault();
			}
		}
	},

	computed: {
		imagesValues() {
			return Object.values(this.images);
		},

		isMultiple() {
			return this.multiple;
		},

		imagesLength() {
			return this.imagesValues.length;
		},

		calculatedWidth() {
			return this.width / this.imagesLength;
		},

		clearMessage() {
			return this.text.clear || 'clear';
		},

		removeMessage() {
			return this.text.remove || 'remove';
		}
	},

	watch: {
		src(val) {
			this.setImageSrc();
		}
	},

	mounted() {
		this.initMessage();
		this.setMaxSize();
		this.setSizeUnit();
		this.setImageSrc();
	},
}
</script>
<style lang="scss">
.el-icon-loading {
	font-size:24px;
	position:absolute;
	top:45%;
	left:45%;
	font-weight:bold;
	color:#5d56f9
}
.vue-dropify {
	display: block;
	position: relative;
	cursor: pointer;
	overflow: hidden;
	width: 100%;
	height: 200px;
	padding: 5px 10px;
	font-size: 14px;
	line-height: 22px;
	color: #585858;
	background-color: #FBFBFF;
	background-image: none;
	text-align: center;
	border: 1px dashed #D4D4D4;
	-webkit-transition: border-color .15s linear;
	transition: border-color .15s linear;
	border-radius: 4px;

	&:hover{
		border-color: #C0C4CC;
	}

	&.is-disabled {
		cursor: not-allowed;
		.vue-dropify__input {
			cursor: not-allowed;
		}
	}

	&.full{
		position: absolute;
		background: transparent;
		border:none;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		height: 100%;
		width: 100%;
		&__message, .vue-dropify-wrapper {
			opacity:0 !important;
		}
	}

	&__input {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		height: 100%;
		width: 100%;
		opacity: 0;
		cursor: pointer;
		z-index: 5;
	}

	&__message {
		position: relative;
		top: 50%;
		-webkit-transform: translateY(-50%);
		transform: translateY(-50%);
		p {
			margin: 5px 0 0;
			color: #777;
		}
	}
	&__icon {font-size: 70px;color: #CCC;}
}
.vue-dropify-info {font-size: 13px;font-size: 0.8125rem;color: #A8A8A8;letter-spacing: 0.4px;}
.vue-dropify-button {position: absolute;top: 10px;right: 10px;display: none;}
.vue-dropify-wrapper {
	&.is-multiple {
		.vue-dropify-wrapper__body {
			justify-content: space-around;
		}
	}
	&__body {
		display: flex; justify-content: space-center; align-content: center;
	}
	&__item {
		margin-right: 10px;
	}
	img { height: 100%; }
}
.vue-dropify-img {
	width: 15em;
	height: 190px;
	display: inline-block;
	overflow: hidden;
	position: relative;
	span {
		&.has-icon {
			position: absolute;
			right: 0px;
			z-index: 999;
		}
		svg {
			height: 20px;
			width: 20px;
			background: rgba(255,255,255, 1);
			padding: 5px;
			path {
				fill: hsla(0, 91.9%, 43.3%, 0.5) !important
			}
		}
		&:hover {
			svg {
				background: rgba(255,255,255, 1);
				path{fill: hsla(0, 91.9%, 43.3%, 0.73) !important}
			}
		}
	}
	i { position: absolute; top: 40%; left: 40%}
}
.vue-dropify-remove {
	position: absolute;
	padding: 2px 8px;
	background: hsla(0, 91.9%, 43.3%, 0.5);
	right: 3px;
	top: 5px;
	border-radius: 3px;
	z-index: 999;
	color:#fff;
	opacity: 1;
	width: auto;
	border: none;
	&:hover {
		background: hsla(0, 91.9%, 43.3%, 0.73);
		cursor: pointer;
	}
}
</style>
