import {Msdyn_kbenrichment} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_kbenrichmentFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_kbenrichment {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_kbenrichment();
}
