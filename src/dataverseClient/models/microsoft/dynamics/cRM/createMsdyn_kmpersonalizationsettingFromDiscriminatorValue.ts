import {Msdyn_kmpersonalizationsetting} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_kmpersonalizationsettingFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_kmpersonalizationsetting {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_kmpersonalizationsetting();
}
