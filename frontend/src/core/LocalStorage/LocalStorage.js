class LocalStorage {
	constructor() {
		this.keyName = 'key';
	}

	getItem() {
		const user = localStorage.getItem(this.keyName);
		if (user !== null) {
			return JSON.parse(user);
		}
		return null;
	}

	setItem(user) {
		localStorage.setItem(
			this.keyName,
			JSON.stringify({
				name: user.name,
				surname: user.surname,
				email: user.email,
				location: user.location,
				number: user.number,
				birthDate: user.birthDate,
				password: user.password,
				id: user.id,
				role: user.roles[0].name,
				education: user.education,
			})
		);
	}

	removeItem() {
		localStorage.removeItem(this.keyName);
	}
}

export default LocalStorage;
