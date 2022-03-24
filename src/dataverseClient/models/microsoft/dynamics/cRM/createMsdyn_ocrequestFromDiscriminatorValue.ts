import {Msdyn_ocrequest} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_ocrequestFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_ocrequest {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_ocrequest();
}
