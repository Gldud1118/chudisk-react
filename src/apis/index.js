import axios from 'axios';

const request = (method, url, data) => {
  return axios({
    baseURL: 'https://localhost:44393/',
    method,
    url,
    data,
    headers: {
      'Content-Type':
        data instanceof FormData ? 'multipart/form-data' : 'application/json'
    }
  })
    .then(result => result.data)
    .catch(result => {
      throw result.response;
    });
};

export const apiFetchRecent = () => {
  return request('get', '/api/disk/files/recent');
};

export const apiFetchFileLibrary = mimeType => {
  return request('get', `/api/disk/files/mimetype/${mimeType}`);
};

export const apiUploadFile = formData => {
  return request('post', '/api/disk/file', formData);
};

export const apiSearch = query => {
  return request('get', `/api/disk/files/search?q=${query}`);
};

export const apiFetchFolder = folderId => {
  return request(
    'get',
    typeof folderId === 'undefined'
      ? `/api/disk/folder`
      : `/api/disk/folder/${folderId}`
  );
};

export const apiFetchFolderPath = folderId => {
  return request('get', `/api/disk/folderPath/${folderId}`);
};

export const apiFetchFolderTree = () => {
  return request('get', '/api/disk/folderTreePath');
};

export const apiFetchTrashed = () => {
  return request('get', '/api/disk/trash');
};

export const apiFetchStarred = () => {
  return request('get', '/api/disk/starred');
};

export const apiCreateFolder = (parentId, folderName) => {
  return request('post', '/api/disk/folder', {
    parentId,
    folderName
  });
};

export const apiRename = (resourceType, id, newName) => {
  return request(
    'put',
    `/api/disk/${resourceType}/rename/${id}`,
    JSON.stringify(newName)
  );
};

export const apiChangeTrashedStatus = (resourceType, id, trashed) => {
  return request('put', `/api/disk/${resourceType}/trashed/${id}`, trashed);
};

export const apiChangeStarredStatus = (resourceType, id, starred) => {
  return request('put', `/api/disk/${resourceType}/starred/${id}`, starred);
};
export const apiDestroy = (resourceType, id) => {
  return request('delete', `/api/disk/${resourceType}/${id}`);
};
export const apiCopy = (resourceType, id, targetFolderId) => {
  return request(
    'put',
    `/api/disk/${resourceType}/copy/${id}`,
    JSON.stringify(targetFolderId)
  );
};

export const apiMove = (resourceType, id, targetFolderId) => {
  return request(
    'put',
    `/api/disk/${resourceType}/move/${id}`,
    JSON.stringify(targetFolderId)
  );
};

export const apiLogin = (email, password) => {
  return request('post', '/api/account/login', { email, password });
};
