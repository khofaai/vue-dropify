<template>
	<div 
		:style="{
			'height': height,
			'width': width
		}" 
		 class="dropzone-area" 
		:class="{
			'hovered': hovering,
			'full': full
		}"
		@dragenter="hovering = true" 
		@dragleave="hovering = false" >
			
			<template v-if="!loading">
			
				<input 
					id="file_input"
					type="file" 
					:style="{
						'height': height,
						'width': '100%'
					}" 
					:accept="accept"
					@change="onFileChange">
			</template>
			
			<div class="dropzone-message">
			
				<span class="file-icon zmdi zmdi-cloud-upload"></span>
			
				<p v-if="!removeImg">
					{{ dropify_message }}
				</p>
			</div>

			<div 
				class="dropzone-preview" 
				style="text-align:center" 
				:class="{ 'on': removeImg }">
				
					<img 
						v-if="image != ''"
						 class="dropzone-img" 
						:style="{
							'height': height,
							'width': width
						}" 
						:src="image" />
			</div>

			<template v-if="!loading">
				
				<button 
					v-if="removeImg"
					type="button" 
					class="dropzone-remove kontent-btn btn lightgray btn-sm" 
					@click.self="removeImage">
						remove
				</button>
			</template>
			<i v-else class="el-icon-loading" style="font-size:24px;position:absolute;top:45%;left:45%;font-weight:bold;color:#5d56f9"></i>
	</div>
</template>
<script>
	export default {
		name:'Dropify',
		props:{
			full:{
				default:false
			},
			message:{
				default:'',
			},
			height:{
				default:'',
			},
			width:{
				default:'auto',
			},
			loading:{
				default:false
			},
			accept:{
				default:'image/*'
			}
		},
		data() {
			return {
				image:"",
				removeImg:false,
				hovering:false,
				dropify_message:'Drop image here or click to select'
			}
		},

		methods: {

			onFileChange(e) {

				var files = e.target.files || e.dataTransfer.files;
				
				if (!files.length) return;

				this.$emit('upload',files[0]);
				
				this.createImage(files[0]);
				this.removeImg = true;

				this.$emit('change');
			},
			createImage(file) {
				
				var image = new Image();
				var reader = new FileReader();
				var vm = this;

				reader.onload = (e) => {
					vm.image = e.target.result;
				};
				reader.readAsDataURL(file);
			},
			removeImage (e) {
				this.image = '';
				this.removeImg = false;
				this.$emit('upload','');
			},
			initMessage() {

				if( typeof this.message !== 'undefined' && this.message != '' ){
					
					this.dropify_message = this.message
				}
			}
		},
		mounted () {
			this.initMessage();
		}
	}
</script>
<style>
	.dropzone-area.full{position: absolute;background: transparent;border:none;top: 0;left: 0;right: 0;bottom: 0;margin: auto;height: 100%;width: 100%;}
	.dropzone-area.full .dropzone-message,.dropzone-area.full .dropzone-preview{opacity:0 !important;}
	.dropify{opacity: 0;position: absolute;height: 210px;cursor: pointer}
	.dropify-preview{height: 210px;background-color: #666;z-index: 15}
	.dropify:hover ~ .dropify-preview{background-color: #888;}
	.dropzone-area {display: block;position: relative;cursor: pointer;overflow: hidden;width: 100%;max-width: 100%;height: 200px;padding: 5px 10px;font-size: 14px;line-height: 22px;color: #585858;background-color: #FFF;background-image: none;text-align: center;border: 2px solid #cccccc;-webkit-transition: border-color .15s linear;transition: border-color .15s linear;border-radius: 4px;}
	.dropzone-area:hover{background-size: 30px 30px;background-image: -webkit-linear-gradient(135deg,#F6F6F6 25%,transparent 25%,transparent 50%,#F6F6F6 50%,#F6F6F6 75%,transparent 75%,transparent);background-image: linear-gradient(-45deg,#F6F6F6 25%,transparent 25%,transparent 50%,#F6F6F6 50%,#F6F6F6 75%,transparent 75%,transparent);-webkit-animation: stripes 2s linear infinite;animation: stripes 2s linear infinite;}
	.dropzone-area input {position: absolute;top: 0;right: 0;bottom: 0;left: 0;height: 100%;width: 100%;opacity: 0;cursor: pointer;z-index: 5;}
	.dropzone-info {font-size: 13px;font-size: 0.8125rem;color: #A8A8A8;letter-spacing: 0.4px;}
	.dropzone-button {position: absolute;top: 10px;right: 10px;display: none;}
	.dropzone-preview {width: 100%;height: 100%;position: absolute;top:0;left:0;}
	.dropzone-preview img {height: 100%;}
	.dropzone-img{width: 185px;height: 210px;}
	.dropzone-remove{position: absolute !important;right:2%;top:2%;opacity: 0.6;z-index: 5}
	.dropzone-remove:hover{opacity: 1}
	.dropzone-message{position: relative;top: 50%;-webkit-transform: translateY(-50%);transform: translateY(-50%);}
	.dropzone-message p {margin: 5px 0 0;color: #48d08b;text-transform: uppercase;}
	.file-icon {font-size: 70px;color: #CCC;}
</style>