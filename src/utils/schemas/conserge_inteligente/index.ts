import Parse from 'parse/node';

// Define schema for "users"
export const schemaConserge_Inteligente = async () => {
  
  const userSchema = new Parse.Schema('User');
  userSchema
    .addString('user_intereses')
    .addString('user_timestamp')
    .addString('user_pass_hash')
    .addString('user_session');
  userSchema.save();

  // Define schema for "comidas"
  const comidaSchema = new Parse.Schema('Comida');
  comidaSchema
    .addString('plato_name')
    .addString('plato_descripcion')
    .addString('plato_img')
    .addString('plato_tipo')
    .addString('plato_estado');
  comidaSchema.save();

  // Define schema for "bebidas"
  const bebidaSchema = new Parse.Schema('Bebida');
  bebidaSchema
    .addString('bebida_name')
    .addString('bebida_descripcion')
    .addString('bebida_img')
    .addString('bebida_estado');
  bebidaSchema.save();

  // Define schema for "cocteles"
  const coctelSchema = new Parse.Schema('Coctel');
  coctelSchema
    .addString('coctel_name')
    .addString('coctel_descripcion')
    .addString('coctel_img')
    .addString('coctel_estado');
  coctelSchema.save();

  // Define schema for "reservaciones"
  const reservacionSchema = new Parse.Schema('Reservacion');
  reservacionSchema
    .addString('reservation_tipo')
    .addString('reservation_habitacion')
    .addString('reservation_img');
  reservacionSchema.save();

  // Define schema for "servicios"
  const servicioSchema = new Parse.Schema('Servicio');
  servicioSchema
    .addString('services_name')
    .addString('services_tipo')
    .addString('services_suvenir_name')
    .addString('services_suvenir_descrip')
    .addString('services_estado');
  servicioSchema.save();

  // Define schema for "eventos"
  const eventoSchema = new Parse.Schema('Evento');
  eventoSchema
    .addString('event_name')
    .addString('event_estado')
    .addString('event_activiti_name')
    .addString('event_activiti_duration')
    .addString('event_activiti_descrip')
    .addString('event_space_name')
    .addString('event_space_descrip')
    .addString('event_space_horario')
    .addString('event_entretenimiento_name')
    .addString('event_entretenimiento_descr')
    .addString('event_entretenimiento_horario');
  eventoSchema.save();
};