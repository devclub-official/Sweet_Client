import {RootStackParamList, RootStackScreenList} from '@/types/navigation';
import {
  createNavigationContainerRef,
  NavigationContainerRefWithCurrent,
} from '@react-navigation/native';

class Navigation {
  private static instance: Navigation;
  private navigationRef: NavigationContainerRefWithCurrent<RootStackParamList>;

  private constructor() {
    this.navigationRef = createNavigationContainerRef<RootStackParamList>();
  }

  public static getInstance(): Navigation {
    if (!Navigation.instance) {
      Navigation.instance = new Navigation();
    }
    return Navigation.instance;
  }
  getNavigationRef() {
    return this.navigationRef;
  }
  navigate<RouteName extends RootStackScreenList>(
    route: RouteName,
    params?: RootStackParamList[RouteName],
  ) {
    if (this.navigationRef.isReady()) {
      this.navigationRef.navigate(route as string, params);
    }
  }
}

export const navigation = Navigation.getInstance();
