import 'babel-polyfill'
import $ from 'jquery'
import reqwest from 'reqwest'
import _ from 'lodash'
import visionTemplate from './templates/vision-result.html'

const END_POINT = '/api/vision/'

$('#js-vision').on('click', async e => {
    e.preventDefault()

    let url = $('#url').val()
    let encodedUrl = encodeURIComponent(url)
    let response = await reqwest({
        url: `${END_POINT}?$url=${encodedUrl}`,
        type: 'json'
    })
    let template = _.template(visionTemplate)

    $('.vision-container').html(template({
        url: url,
        result: response.data
    }))

    console.log(response)
})
