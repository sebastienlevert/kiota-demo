import {Msdyn_actioncardrolesetting} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_actioncardrolesettingFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_actioncardrolesetting {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_actioncardrolesetting();
}
