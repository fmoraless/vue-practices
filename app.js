const vm = Vue.createApp({
  data() {
    return {
      menuItems: [
        {
          name: "training",
          label: "Capacitación",
          children: [
            {
              name: "programs",
              label: "Programas",
              children: [
                {
                  name: "programsManage",
                  label: "Gestión de programas",
                  chidren: [
                    {
                      name: "allPrograms",
                      label: "Todos los programas",
                    },
                  ],
                },
              ],
            },
            {
              name: "courses",
              label: "Cursos",
              children: [
                {
                  name: "coursesManage",
                  label: "Gestión de Cursos",
                  chidren: [
                    {
                      name: "allCourses",
                      label: "Todos los cursos",
                    },
                    {
                      name: "newCourse",
                      label: "Nuevo curso",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    };
  },
  methods: {},
  computed: {},
})
  .component("menu-item", {
    template: "#menu-item-template",
  })
  .mount("#app");
