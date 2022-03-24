import {Timezonedefinition} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTimezonedefinitionFromDiscriminatorValue(parseNode: ParseNode | undefined) : Timezonedefinition {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Timezonedefinition();
}
