import {Msfp_project} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsfp_projectFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msfp_project {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msfp_project();
}
