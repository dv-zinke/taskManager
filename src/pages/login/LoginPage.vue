<template>
    <div class="mt-4">
        <b-form @submit.prevent="onSubmit">
            <b-form-group
                    id="input-group-1"
                    label="Email address:"
                    label-for="input-1"
            >
                <b-form-input
                        id="input-1"
                        v-model="form.email"
                        type="email"
                        required
                        placeholder="Enter email"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Password: " label-for="input-2">
                <b-form-input
                        id="input-2"
                        type="password"
                        v-model="form.password"
                        required
                        placeholder="Enter name"
                ></b-form-input>
            </b-form-group>


            <b-button type="submit" variant="primary">Login</b-button>

        </b-form>

    </div>
</template>

<script>
    export default {
        name: "LoginPage",
        data() {
            return {
                form: {
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            onSubmit() {

            }
        },
    }
</script>

<style scoped>

</style>
