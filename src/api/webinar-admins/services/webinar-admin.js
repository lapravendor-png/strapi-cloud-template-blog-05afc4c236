'use strict';

/**
 * webinar-admin service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::webinar-admins.webinar-admin');
