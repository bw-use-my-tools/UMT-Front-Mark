import axios from 'axios';

const apiUrl='https://usemytools.herokuapp.com/api/tools/';

export function getTeamMember(id) {
return axios.get(`${apiUrl}/team-member/${id}`)

}

export function addTeamMembers() {
    return axios.post(`${apiUrl}/team-member`, person`)

}

export function addTeamMember(person) {
    return axios.put(`${apiUrl}/team-member, person`)
})

const api ={ 

    getTeamMembers,
    addTeamMembers,
    addTeamMember,
    editTeamMember
}
export default api

//can also be expressed shorthand as:
// const api= {
// getTeamMembers,
// addTeamMembers

// }

export function getTeamMember(id) {
    return axios.get(`${apiUrl}/team-member/${id}`);

}