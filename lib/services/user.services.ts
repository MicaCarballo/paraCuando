import axios from '../helpers/axios.helpers';

function useUserInfo() {
  return axios.get(
    'https://paracuando-team1.academlo.tech/api/v1/users/user-info'
  );
}

function createPublication(data: {
  title: string;
  tags: string;
  publication_type_id: string;
  description: string;
  urlShare: string;
}) {
  return axios.post(
    'https://paracuando-team1.academlo.tech/api/v1/publications',
    data
  );
}

export { useUserInfo, createPublication };
