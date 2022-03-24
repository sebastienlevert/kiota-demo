import {Applicationuser} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createApplicationuserFromDiscriminatorValue(parseNode: ParseNode | undefined) : Applicationuser {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Applicationuser();
}
