import {Template} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTemplateFromDiscriminatorValue(parseNode: ParseNode | undefined) : Template {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Template();
}
