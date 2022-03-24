import {Goalrollupquery} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGoalrollupqueryFromDiscriminatorValue(parseNode: ParseNode | undefined) : Goalrollupquery {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Goalrollupquery();
}
