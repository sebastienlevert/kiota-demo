import {Theme} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createThemeFromDiscriminatorValue(parseNode: ParseNode | undefined) : Theme {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Theme();
}
