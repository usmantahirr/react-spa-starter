import API from '../../api';
import { COURSE } from '../../api/endpoints';

import Logger from '../../shared/modules/logger';

export async function getCourseList({ filters }) {
  Logger.info('Fetching course list with filters', filters);
  const api = new API();
  return api.get(COURSE, undefined, filters).then(
    res => ({
      data: res.data,
      pageDetails: res.pageDetails,
    }),
    error => {
      throw error;
    }
  );
}

export async function getCourseById(id) {
  const api = new API();
  return api.get(COURSE, id).then(
    res => res.data,
    error => {
      throw error;
    }
  );
}

export async function addCourse(course) {
  const api = new API();
  return api.post(COURSE, course).then(
    res => res.data,
    error => {
      throw error;
    }
  );
}

export async function updateCourse(course, id) {
  const api = new API();
  return api.put(`${COURSE}/${id}`, course).then(
    res => res.data,
    error => {
      throw error;
    }
  );
}

export async function deleteCourse(id) {
  const api = new API();
  return api.delete(COURSE, id).then(
    res => res.data,
    error => {
      throw error;
    }
  );
}
