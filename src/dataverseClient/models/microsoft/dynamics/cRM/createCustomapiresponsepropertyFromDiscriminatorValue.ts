import {Customapiresponseproperty} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCustomapiresponsepropertyFromDiscriminatorValue(parseNode: ParseNode | undefined) : Customapiresponseproperty {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Customapiresponseproperty();
}
