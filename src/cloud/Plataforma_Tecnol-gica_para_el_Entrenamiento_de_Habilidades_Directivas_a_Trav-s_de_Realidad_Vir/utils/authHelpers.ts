
export async function requireAuthentication(request: any) {
    console.log('*************', request);
  
    if (!request.user) {
      throw 'Debe estar autenticado para realizar esta operación';
    }
  }