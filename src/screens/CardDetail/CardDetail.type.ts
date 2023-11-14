import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from 'containers/Router/Router.type';

type StackRouteProp = RouteProp<RootStackParamList, 'CARD_DETAIL'>;

export interface CardDetailPageProps {
  route: StackRouteProp;
}
