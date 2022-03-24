import {Msdyn_chatansweroption} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_chatansweroptionFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_chatansweroption {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_chatansweroption();
}
