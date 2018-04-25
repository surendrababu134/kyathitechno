'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Course Schema
 */
var CourseSchema = new Schema({
  name: {
    type: String,
    default: '',
    required: 'Please fill Course name',
    trim: true
  },
  content: {
    type: String,
    default: '',
  },
  courseIcon: {
    type: String,
    default: '',
  },
  duration: {
    type: String,
    default: '',
  },
  nextBatch: {
    type: String,
    default: '',
  },
  created: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Course', CourseSchema);
