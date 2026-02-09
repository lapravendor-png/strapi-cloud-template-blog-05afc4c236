'use strict';

/**
 *  photo reviews service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::photo-reviews.photo-review');