import { ref } from "vue";
import { projectAuth } from "../firebase/config";

const user = ref(projectAuth.currentUser);

projectAuth.onAuthStateChanged((cUser) => {
	console.log("User state. Current user is :", cUser);
	user.value = cUser;
});

const getUser = () => {
	return { user };
};

export default getUser;
