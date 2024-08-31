/*
  У вас є перелік UserRole, який використовується для класифікації користувачів у вашому додатку.
  Ви хочете створити об'єкт RoleDescription, який зіставлятиме кожну роль користувача з її описом.
*/

export enum UserRole {
	admin = "admin",
	editor = "editor",
	guest = "guest",
}

// Замініть наступний код на версію за допомогою Record
type UserRoleDescription = Record<UserRole, string>;

const RoleDescription: UserRoleDescription = {
	[UserRole.admin]: "Admin User",
	[UserRole.editor]: "Editor User",
	[UserRole.guest]: "Guest User",
};

export {};
