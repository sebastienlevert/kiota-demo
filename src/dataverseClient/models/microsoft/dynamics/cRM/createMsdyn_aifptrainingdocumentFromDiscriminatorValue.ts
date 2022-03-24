import {Msdyn_aifptrainingdocument} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_aifptrainingdocumentFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_aifptrainingdocument {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_aifptrainingdocument();
}
