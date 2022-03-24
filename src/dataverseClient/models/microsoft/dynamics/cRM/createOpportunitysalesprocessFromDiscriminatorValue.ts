import {Opportunitysalesprocess} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOpportunitysalesprocessFromDiscriminatorValue(parseNode: ParseNode | undefined) : Opportunitysalesprocess {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Opportunitysalesprocess();
}
