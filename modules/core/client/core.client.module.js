'use strict';

// Use Applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('core',['ngAnimate','ui.bootstrap']);
ApplicationConfiguration.registerModule('core.admin', ['core']);
ApplicationConfiguration.registerModule('core.admin.routes', ['ui.router']);
