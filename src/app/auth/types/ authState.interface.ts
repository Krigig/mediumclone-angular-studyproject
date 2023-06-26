import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';
import { CurrentUSerInterface } from 'src/app/shared/types/currentUser.interface';

export interface AuthStateInterface {
  isSubmitting: boolean;
  isLoading: boolean;
  currentUser: CurrentUSerInterface | null;
  isLoginIn: boolean | null;
  validationErrors: BackendErrorsInterface | null;
}
