import {Msdyn_templateforproperties} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_templateforpropertiesFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_templateforproperties {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_templateforproperties();
}
