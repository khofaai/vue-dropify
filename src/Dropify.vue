<template>
  <div 
    class="dropzone-area" 
    :style="{ 'height': height, 'width': width }" 
    :class="{ 'hovered': hovering, 'full': full }"
    @dragenter="hovering = true" 
    @dragleave="hovering = false" >
      <template v-if="!loading">
        <input 
          id="file_input"
          type="file" 
          :style="{ 'height': height, 'width': '100%' }" 
          :accept="accept"
          :multiple="isMultiple"
          @change="onFilesUpload">
      </template>
      <div class="dropzone-message">
        <span class="file-icon" :class="uploadIcon"></span>
        <p v-if="images.length == 0">{{ dropifyMessage }}</p>
      </div>
      <div 
        class="dropzone-preview" 
        style="text-align:center" 
        :class="{ 'on': images.length > 0 }">
        <template v-if="images.length > 0">
          <div
            v-for="(image,i) in images"
            :key="i"
            :style="{ 'height': height, 'width': width/images.length }" 
            class="dropzone-img">
            <span @click="removeImage(i)" :class="{'has-icon': removeIcon !== ''}">
              <i v-if="removeIcon && removeIcon !== ''" :class="removeIcon" title="remove"></i>
              <template v-else>remove</template>
            </span>
            <img :src="image" />
          </div>
        </template>
      </div>
      <template v-if="!loading">
        <button 
          v-if="images.length > 1"
          type="button" 
          class="dropzone-remove" 
          @click.self="removeImageAll">remove all</button>
      </template>
      <i v-else class="el-icon-loading"></i>
  </div>
</template>
<script>
  export default {
    name: 'vue-dropify',
    props: {
      full: {
        default: false
      },
      message: {
        default: null
      },
      height: {
        default: ''
      },
      width: {
        default: 'auto'
      },
      loading: {
        default: false
      },
      accept: {
        default: 'image/*'
      },
      multiple: {
        default: null
      },
      size: {
        default: null
      },
      unit: {
        default: null
      },
      uploadIcon: {
        default: ''
      },
      removeIcon: {
        default: null
      }
    },
    data() {
      return {
        reader: null,
        images: [],
        sizeUnit: 'kb',
        maxSize: null,
        hovering: false,
        isMultiple: false,
        dropifyMessage: 'Drop image here or click to select',
        sizeValues: {
          b: 1,
          kb: 1024,
          mb: 1024 * 1024
        }
      }
    },

    methods: {

      onFilesUpload(e) { // validate files before add them to dropify zone
        var files = e.target.files || e.dataTransfer.files;
        if (!files.length) return;
        this.createImage(files);
        this.$emit('upload',files);
        this.$emit('change');
      },

      createImage(files) { // create image instance on dropify zone
        [...files].map( file => {
          if (this.checkFileSize(file)) {
            this.initFileReader( reader => {
              reader.readAsDataURL(file);
            });
          }
        });
      },

      checkFileSize(file) { // check file size before create reader instance
        let convertSize = (size) => size * this.sizeValues[this.sizeUnit];
        if (typeof this.maxSize === 'array' && this.maxSize.length == 2) {
          let minSize = convertSize(maxSize[0]);
          let maxSize = convertSize(maxSize[1]);
          return file.size >= minSize && file.size <= maxSize;
        } else if(this.maxSize !== null) {
          return file.size <= this.maxSize * this.sizeValues[this.sizeUnit];
        }
        return true;
      },

      removeImage (position) { // remove target image instance from dropify
        this.images.splice(position, 1);
        this.$emit('upload', this.images);
      },

      removeImageAll (e) { // remove all images from dropify
        this.images = [];
        this.$emit('upload', '');
      },
      
      initMessage() { // set custom dropify message 
        if ( typeof this.message !== 'undefined' && this.message != null ) {
          this.dropifyMessage = this.message
        }
      },

      setMultiple() { // enable multiple image upload
        this.isMultiple = this.multiple !== null && this.multiple !== false;
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

      initFileReader(callback) { // init file upload to dropify
        let reader = new FileReader();
        reader.onload = (e) => {
          this.images.push(e.target.result);
        };
        callback(reader);
      }
    },
    mounted () {
      this.initMessage();
      this.setMultiple();
      this.setMaxSize();
      this.setSizeUnit();
    }
  }
</script>
<style>
  .el-icon-loading {font-size:24px;position:absolute;top:45%;left:45%;font-weight:bold;color:#5d56f9}
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
  .dropzone-img{width: 185px;height: 210px;display: inline-block;overflow: hidden;padding: 2px;position: relative;box-shadow: 0 0 5px 0px #aaa}
  .dropzone-img span{position: absolute;padding: 3px 8px;background: rgba(255,255,255,.5);right: 3px;top: 5px;border-radius: 3px;z-index: 999;width: 5px;border: 2px solid #ccc;opacity: .2;}
  .dropzone-img span:hover {transition: .3s all;background: #fff;width: auto; opacity: 1}
  .dropzone-img span.has-icon{position: absolute;padding: 0px 5px;background: hsla(0, 91.9%, 43.3%, 0.5);right: 3px;top: 5px;border-radius: 3px;z-index: 999;color:#fff;opacity: 1;width: auto;border: none;}
  .dropzone-img span.has-icon:hover{background: hsla(0, 91.9%, 43.3%, 0.73);}
  .dropzone-remove{position: absolute !important;right:2%;top:2%;opacity: 0.6;z-index: 5}
  .dropzone-remove:hover{opacity: 1}
  .dropzone-message{position: relative;top: 50%;-webkit-transform: translateY(-50%);transform: translateY(-50%);}
  .dropzone-message p {margin: 5px 0 0;color: #777;}
  .file-icon {font-size: 70px;color: #CCC;}
</style>
