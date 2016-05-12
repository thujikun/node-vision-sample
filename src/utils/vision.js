import vision from 'node-cloud-vision-api'
import config from 'root/gcp_conf'

const ACCESS_KEY = config.access_key

class Vision {
    constructor() {
        vision.init({ auth: ACCESS_KEY })
        this.targets = []
    }

    set(imagePath) {
        this.targets.push(new vision.Request({
            image: new vision.Image({
                url: imagePath
            }),
            features: [
                new vision.Feature('FACE_DETECTION', 5),
                new vision.Feature('LABEL_DETECTION', 5),
                new vision.Feature('IMAGE_PROPERTIES', 5),
                new vision.Feature('LOGO_DETECTION', 5),
                new vision.Feature('LANDMARK_DETECTION', 5),
                new vision.Feature('TEXT_DETECTION', 5),
            ]
        }))
    }

    get() {
        if (!this.targets.length) {
            return 'Please set target image.'
        }
        return vision.annotate(this.targets)
    }
}

export default Vision
