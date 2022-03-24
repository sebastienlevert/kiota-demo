import {Msdyn_predictivemodelscore} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_predictivemodelscoreFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_predictivemodelscore {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_predictivemodelscore();
}
