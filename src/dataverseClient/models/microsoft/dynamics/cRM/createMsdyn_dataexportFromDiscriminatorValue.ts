import {Msdyn_dataexport} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_dataexportFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_dataexport {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_dataexport();
}
