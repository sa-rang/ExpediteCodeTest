// stores/chats.js
import { defineStore } from 'pinia'

export const useWidgetStore = defineStore('widget', {
  state: () => {
    return {
      rolePermission: null,
      articleList: [
        {
          articleId: "1",
          title: "Article 1",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?"
        },
        {
          articleId: "2",
          title: "Article 2",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?"
        },
        {
          articleId: "3",
          title: "Article 3",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?"
        },
        {
          articleId: "4",
          title: "Article 4",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?"
        }
      ],
      roleList: [{
        roleId: "1",
        name: "Admin"
      },
      {
        roleId: "2",
        name: "Editor"
      },
      {
        roleId: "3",
        name: "Publisher"
      }],
      isUserLogin: false,
      isUserAdmin: false

    }
  },

  actions: {

    setRolePermission(iRole) {
      if (iRole?.roleId === "1") {
        this.rolePermission = "ALL"
      } else if (iRole?.roleId === "2") {
        this.rolePermission = "EDIT"
      } else if (iRole?.roleId === "3") {
        this.rolePermission = "PUBLISH"
      } else {
        this.rolePermission = null
      }
    },
    setLogin(iUser) {

      if (iUser.toLowerCase() === "john") { //Statically setting john as the admin user :: it will be determined from BE in real
        this.isUserAdmin = true
      }
      this.isUserLogin = true
    },
    setLogout() {
      this.isUserAdmin = false;
      this.isUserLogin = false
      this.rolePermission = null
    }
  },
})