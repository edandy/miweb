<template>
    <!-- Contact Subpage -->
    <section class="pt-page pt-page-6" data-id="contact">
        <div class="section-title-block">
            <h2 class="section-title">Contáctame</h2>
            <h5 class="section-description">¿Tienes alguna duda?</h5>
        </div>

        <div class="row">
            <div class="col-sm-6 col-md-6 subpage-block">
                <div class="block-title">
                    <h3>Lleva tu negocio al siguiente nivel.</h3>
                </div>
                <p>Para recibir más información de mis servicios complete el formulario de contacto y me comunicare con usted. </p>
                <div class="contact-info-block">
                    <div class="ci-icon">
                        <i class="pe-7s-icon pe-7s-map-marker"></i>
                    </div>
                    <div class="ci-text">
                        <h5>Calle Neptuno 177, San Roque, Santiago de Surco, Lima - Perú</h5>
                    </div>
                </div>
                <div class="contact-info-block">
                    <div class="ci-icon">
                        <i class="pe-7s-icon pe-7s-mail"></i>
                    </div>
                    <div class="ci-text">
                        <h5><a href="mailto:edandy.perez@gmail.com" class="__cf_email__">edandy.perez@gmail.com</a></h5>
                    </div>
                </div>
                <div class="contact-info-block">
                    <div class="ci-icon">
                        <i class="pe-7s-icon pe-7s-call"></i>
                    </div>
                    <div class="ci-text">
                        <h5>+51 955 106 414</h5>
                    </div>
                </div>
                <div class="contact-info-block">
                    <div class="ci-icon">
                        <i class="pe-7s-icon pe-7s-check"></i>
                    </div>
                    <div class="ci-text">
                        <h5>Freelance Available</h5>
                    </div>
                </div>
            </div>

            <div class="col-sm-6 col-md-6 subpage-block">
                <div class="block-title">
                    <h3>Escríbeme</h3>
                </div>
                <form id="formapidandylead" class="formapidandylead">
                    <div class="messages"></div>
                    <div class="controls">
                        <div class="form-group">
                            <input id="form_name" type="text" v-model="lead.name" name="name" class="form-control" placeholder="Nombres" data-error="Name is required.">
                            <div class="form-control-border"></div>
                            <i class="form-control-icon fa fa-user"></i>
                            <div class="help-block with-errors" v-if="validationField('name')">{{ validationField('name') }}</div>
                        </div>

                        <div class="form-group">
                            <input id="form_email" type="email" v-model="lead.email" name="email" class="form-control" placeholder="Email" data-error="Valid email is required.">
                            <div class="form-control-border"></div>
                            <i class="form-control-icon fa fa-envelope"></i>
                            <div class="help-block with-errors" v-if="validationField('email')">{{ validationField('email') }}</div>
                        </div>

                        <div class="form-group">
                            <input id="form_phone" type="tel" v-model="lead.phone" name="phone" class="form-control" placeholder="Teléfono" data-error="El teléfono es requerido.">
                            <div class="form-control-border"></div>
                            <i class="form-control-icon fa fa-phone"></i>
                            <div class="help-block with-errors" v-if="validationField('phone')">{{ validationField('phone') }}</div>
                        </div>

                        <div class="form-group">
                            <textarea id="form_message" v-model="lead.message" name="message" class="form-control" placeholder="Mensaje" rows="4" data-error="Please, leave me a message."></textarea>
                            <div class="form-control-border"></div>
                            <i class="form-control-icon fa fa-comment"></i>
                            <div class="help-block with-errors" v-if="validationField('message')">{{ validationField('message') }}</div>
                        </div>

                        <button type="submit" class="button btn-send" @click.prevent="sendForm"
                            :disabled="loadingBtn">Enviar</button>

                        <p class="help-block" v-if="message">{{ message }}</p>
                    </div>
                </form>
            </div>
        </div>
    </section>
  <!-- End Contact Subpage -->
</template>

<script>
import {mapGetters, mapActions} from "vuex";
export default {
    data () {
        return {
            lead: {
                name: '',
                email: '',
                phone: '',
                message: ''
            },
            message: '',
            loadingBtn: false
        }
    },
    methods: {
        ...mapActions('validation', ['setErrors']),
        sendForm() {
            this.setErrors({})
            this.loadingBtn = true;
            this.$store.dispatch('contact/sendForm', this.lead)
            .then(() => {
                this.cleanFields()
                this.message = 'Sus datos fueron enviados correctamente.'
            })
            .catch ((err) => {
                console.log('err => ', err)
            })
            .finally(() => {
                this.loadingBtn = false;
            })
        },
        cleanFields() {
            this.lead.name = ''
            this.lead.email = ''
            this.lead.phone = ''
            this.lead.message = ''
        }
    },
    computed: {
        ...mapGetters('validation', ['validationField']),
    },
}
</script>
