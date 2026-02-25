'use strict';

/**
 * webinar_speakers service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::webinar-speakers.webinar-speaker');