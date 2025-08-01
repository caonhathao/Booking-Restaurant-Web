import apiClient from '@/services/api/apiClient';
import endPoints from '@/services/api/endPoints';

export const fetchCategory = async (search, page) => {
  try {
    // console.log('[DEBUG] URL gọi API:', endPoints.admin.getALlCategory(search, page));
    const response = await apiClient.get(endPoints.admin.getAllCategory(
      search, page,
    ));
    return response.data;
  } catch (error) {
    // console.log('Fetch data failed:', error);
    throw error;
  }
};

export const createCategory = async (createForm) => {
  try {
    const response = await apiClient.post(endPoints.admin.createCategory, createForm);
    return response.data;
  } catch (error) {
    // console.error('Create failed:', error);
    throw error;
  }
};

export const editCategory = async (id, editForm) => {
  try {
    const response = await apiClient.patch(endPoints.admin.editCategory(id), editForm);
    return response.data;
  } catch (error) {
    // console.error('Edit category failed:', error);
    throw error;
  }
};

export const deleteCategory = async (id) => {
  try {
    const response = await apiClient.delete(endPoints.admin.disabledCategory(id));
    console.log(response);
    return response.data;
  } catch (error) {
    // console.error('Delete category failed:', error);
    throw error;
  }
}