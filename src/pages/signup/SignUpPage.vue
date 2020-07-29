<template>
    <div class="mt-4">
        <b-form @submit.prevent="onSubmit">

            <b-form-group
                    label="Name:"
            >
                <b-form-input
                        v-model="form.name"
                        type="text"
                        required
                        placeholder="Enter name"
                ></b-form-input>
            </b-form-group>

            <b-form-group
                    label="Email address:"
            >
                <b-form-input
                        id="input-1"
                        v-model="form.email"
                        type="email"
                        required
                        placeholder="Enter email"
                ></b-form-input>
            </b-form-group>

            <b-form-group label="Password: ">
                <b-form-input
                        type="password"
                        v-model="form.password"
                        required
                        placeholder="Enter name"
                ></b-form-input>
            </b-form-group>

            <b-form-group label="Confirm Password: ">
                <b-form-input
                        type="password"
                        v-model="form.passwordConfirm"
                        required
                        placeholder="Enter name"
                ></b-form-input>
            </b-form-group>


            <b-button type="submit" variant="primary">Sign up</b-button>

        </b-form>

    </div>
</template>

<script>
    export default {
        name: "SignUpPage",
        data() {
            return {
                form: {
                    name: '',
                    email: '',
                    password: '',
                    passwordConfirm: ''
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
