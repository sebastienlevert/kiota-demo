import {Msfp_emailtemplate} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsfp_emailtemplateFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msfp_emailtemplate {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msfp_emailtemplate();
}
