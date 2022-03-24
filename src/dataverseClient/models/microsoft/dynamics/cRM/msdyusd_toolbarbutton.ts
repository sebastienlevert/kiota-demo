import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createConnectionFromDiscriminatorValue} from './createConnectionFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyusd_agentscriptactionFromDiscriminatorValue} from './createMsdyusd_agentscriptactionFromDiscriminatorValue';
import {createMsdyusd_toolbarbuttonFromDiscriminatorValue} from './createMsdyusd_toolbarbuttonFromDiscriminatorValue';
import {createMsdyusd_toolbarstripFromDiscriminatorValue} from './createMsdyusd_toolbarstripFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {createUii_hostedapplicationFromDiscriminatorValue} from './createUii_hostedapplicationFromDiscriminatorValue';
import {Annotation, Asyncoperation, Bulkdeletefailure, Businessunit, Connection, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyusd_agentscriptaction, Msdyusd_toolbarstrip, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team, Uii_hostedapplication} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyusd_toolbarbutton extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyusd_buttons_value?: string | undefined;
    private __msdyusd_showtab_value?: string | undefined;
    private __msdyusd_toolbarid_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyusd_Buttons?: Msdyusd_toolbarbutton | undefined;
    private _msdyusd_buttontext?: string | undefined;
    private _msdyusd_enablecondition?: number | undefined;
    private _msdyusd_enabledcondition?: string | undefined;
    private _msdyusd_image?: string | undefined;
    private _msdyusd_name?: string | undefined;
    private _msdyusd_order?: number | undefined;
    private _msdyusd_scriptcondition?: string | undefined;
    private _msdyusd_shortcutkey?: string | undefined;
    private _msdyusd_showtab?: Uii_hostedapplication | undefined;
    private _msdyusd_toolbarbutton_agentscriptaction?: Msdyusd_agentscriptaction[] | undefined;
    private _msdyusd_toolbarbutton_Annotations?: Annotation[] | undefined;
    private _msdyusd_toolbarbutton_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyusd_toolbarbutton_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyusd_toolbarbutton_connections1?: Connection[] | undefined;
    private _msdyusd_toolbarbutton_connections2?: Connection[] | undefined;
    private _msdyusd_toolbarbutton_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyusd_toolbarbutton_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyusd_toolbarbutton_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyusd_toolbarbutton_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyusd_toolbarbutton_ProcessSession?: Processsession[] | undefined;
    private _msdyusd_toolbarbutton_SyncErrors?: Syncerror[] | undefined;
    private _msdyusd_toolbarbutton_toolbarbutton_Buttons?: Msdyusd_toolbarbutton[] | undefined;
    private _msdyusd_toolbarbuttonid?: string | undefined;
    private _msdyusd_ToolbarId?: Msdyusd_toolbarstrip | undefined;
    private _msdyusd_tooltip?: string | undefined;
    private _msdyusd_visiblecondition?: string | undefined;
    private _msdyusd_webresourceurl?: string | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _utcconversiontimezonecode?: number | undefined;
    private _versionnumber?: number | undefined;
    /**
     * Gets the _createdby_value property value. 
     * @returns a string
     */
    public get _createdby_value() {
        return this.__createdby_value;
    };
    /**
     * Sets the _createdby_value property value. 
     * @param value Value to set for the _createdby_value property.
     */
    public set _createdby_value(value: string | undefined) {
        this.__createdby_value = value;
    };
    /**
     * Gets the _createdonbehalfby_value property value. 
     * @returns a string
     */
    public get _createdonbehalfby_value() {
        return this.__createdonbehalfby_value;
    };
    /**
     * Sets the _createdonbehalfby_value property value. 
     * @param value Value to set for the _createdonbehalfby_value property.
     */
    public set _createdonbehalfby_value(value: string | undefined) {
        this.__createdonbehalfby_value = value;
    };
    /**
     * Gets the _modifiedby_value property value. 
     * @returns a string
     */
    public get _modifiedby_value() {
        return this.__modifiedby_value;
    };
    /**
     * Sets the _modifiedby_value property value. 
     * @param value Value to set for the _modifiedby_value property.
     */
    public set _modifiedby_value(value: string | undefined) {
        this.__modifiedby_value = value;
    };
    /**
     * Gets the _modifiedonbehalfby_value property value. 
     * @returns a string
     */
    public get _modifiedonbehalfby_value() {
        return this.__modifiedonbehalfby_value;
    };
    /**
     * Sets the _modifiedonbehalfby_value property value. 
     * @param value Value to set for the _modifiedonbehalfby_value property.
     */
    public set _modifiedonbehalfby_value(value: string | undefined) {
        this.__modifiedonbehalfby_value = value;
    };
    /**
     * Gets the _msdyusd_buttons_value property value. 
     * @returns a string
     */
    public get _msdyusd_buttons_value() {
        return this.__msdyusd_buttons_value;
    };
    /**
     * Sets the _msdyusd_buttons_value property value. 
     * @param value Value to set for the _msdyusd_buttons_value property.
     */
    public set _msdyusd_buttons_value(value: string | undefined) {
        this.__msdyusd_buttons_value = value;
    };
    /**
     * Gets the _msdyusd_showtab_value property value. 
     * @returns a string
     */
    public get _msdyusd_showtab_value() {
        return this.__msdyusd_showtab_value;
    };
    /**
     * Sets the _msdyusd_showtab_value property value. 
     * @param value Value to set for the _msdyusd_showtab_value property.
     */
    public set _msdyusd_showtab_value(value: string | undefined) {
        this.__msdyusd_showtab_value = value;
    };
    /**
     * Gets the _msdyusd_toolbarid_value property value. 
     * @returns a string
     */
    public get _msdyusd_toolbarid_value() {
        return this.__msdyusd_toolbarid_value;
    };
    /**
     * Sets the _msdyusd_toolbarid_value property value. 
     * @param value Value to set for the _msdyusd_toolbarid_value property.
     */
    public set _msdyusd_toolbarid_value(value: string | undefined) {
        this.__msdyusd_toolbarid_value = value;
    };
    /**
     * Gets the _ownerid_value property value. 
     * @returns a string
     */
    public get _ownerid_value() {
        return this.__ownerid_value;
    };
    /**
     * Sets the _ownerid_value property value. 
     * @param value Value to set for the _ownerid_value property.
     */
    public set _ownerid_value(value: string | undefined) {
        this.__ownerid_value = value;
    };
    /**
     * Gets the _owningbusinessunit_value property value. 
     * @returns a string
     */
    public get _owningbusinessunit_value() {
        return this.__owningbusinessunit_value;
    };
    /**
     * Sets the _owningbusinessunit_value property value. 
     * @param value Value to set for the _owningbusinessunit_value property.
     */
    public set _owningbusinessunit_value(value: string | undefined) {
        this.__owningbusinessunit_value = value;
    };
    /**
     * Gets the _owningteam_value property value. 
     * @returns a string
     */
    public get _owningteam_value() {
        return this.__owningteam_value;
    };
    /**
     * Sets the _owningteam_value property value. 
     * @param value Value to set for the _owningteam_value property.
     */
    public set _owningteam_value(value: string | undefined) {
        this.__owningteam_value = value;
    };
    /**
     * Gets the _owninguser_value property value. 
     * @returns a string
     */
    public get _owninguser_value() {
        return this.__owninguser_value;
    };
    /**
     * Sets the _owninguser_value property value. 
     * @param value Value to set for the _owninguser_value property.
     */
    public set _owninguser_value(value: string | undefined) {
        this.__owninguser_value = value;
    };
    /**
     * Instantiates a new msdyusd_toolbarbutton and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdby property value. 
     * @returns a systemuser
     */
    public get createdby() {
        return this._createdby;
    };
    /**
     * Sets the createdby property value. 
     * @param value Value to set for the createdby property.
     */
    public set createdby(value: Systemuser | undefined) {
        this._createdby = value;
    };
    /**
     * Gets the createdon property value. 
     * @returns a Date
     */
    public get createdon() {
        return this._createdon;
    };
    /**
     * Sets the createdon property value. 
     * @param value Value to set for the createdon property.
     */
    public set createdon(value: Date | undefined) {
        this._createdon = value;
    };
    /**
     * Gets the createdonbehalfby property value. 
     * @returns a systemuser
     */
    public get createdonbehalfby() {
        return this._createdonbehalfby;
    };
    /**
     * Sets the createdonbehalfby property value. 
     * @param value Value to set for the createdonbehalfby property.
     */
    public set createdonbehalfby(value: Systemuser | undefined) {
        this._createdonbehalfby = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Msdyusd_toolbarbutton)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyusd_toolbarbutton)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyusd_toolbarbutton)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyusd_toolbarbutton)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyusd_buttons_value": (o, n) => { (o as unknown as Msdyusd_toolbarbutton)._msdyusd_buttons_value = n.getStringValue(); },
            "_msdyusd_showtab_value": (o, n) => { (o as unknown as Msdyusd_toolbarbutton)._msdyusd_showtab_value = n.getStringValue(); },
            "_msdyusd_toolbarid_value": (o, n) => { (o as unknown as Msdyusd_toolbarbutton)._msdyusd_toolbarid_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyusd_toolbarbutton)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyusd_toolbarbutton)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyusd_toolbarbutton)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyusd_toolbarbutton)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyusd_toolbarbutton).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyusd_toolbarbutton).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyusd_toolbarbutton).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyusd_toolbarbutton).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyusd_toolbarbutton).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyusd_toolbarbutton).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyusd_toolbarbutton).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyusd_Buttons": (o, n) => { (o as unknown as Msdyusd_toolbarbutton).msdyusd_Buttons = n.getObjectValue<Msdyusd_toolbarbutton>(createMsdyusd_toolbarbuttonFromDiscriminatorValue); },
            "msdyusd_buttontext": (o, n) => { (o as unknown as Msdyusd_toolbarbutton).msdyusd_buttontext = n.getStringValue(); },
            "msdyusd_enablecondition": (o, n) => { (o as unknown as Msdyusd_toolbarbutton).msdyusd_enablecondition = n.getNumberValue(); },
            "msdyusd_enabledcondition": (o, n) => { (o as unknown as Msdyusd_toolbarbutton).msdyusd_enabledcondition = n.getStringValue(); },
            "msdyusd_image": (o, n) => { (o as unknown as Msdyusd_toolbarbutton).msdyusd_image = n.getStringValue(); },
            "msdyusd_name": (o, n) => { (o as unknown as Msdyusd_toolbarbutton).msdyusd_name = n.getStringValue(); },
            "msdyusd_order": (o, n) => { (o as unknown as Msdyusd_toolbarbutton).msdyusd_order = n.getNumberValue(); },
            "msdyusd_scriptcondition": (o, n) => { (o as unknown as Msdyusd_toolbarbutton).msdyusd_scriptcondition = n.getStringValue(); },
            "msdyusd_shortcutkey": (o, n) => { (o as unknown as Msdyusd_toolbarbutton).msdyusd_shortcutkey = n.getStringValue(); },
            "msdyusd_showtab": (o, n) => { (o as unknown as Msdyusd_toolbarbutton).msdyusd_showtab = n.getObjectValue<Uii_hostedapplication>(createUii_hostedapplicationFromDiscriminatorValue); },
            "msdyusd_toolbarbutton_agentscriptaction": (o, n) => { (o as unknown as Msdyusd_toolbarbutton).msdyusd_toolbarbutton_agentscriptaction = n.getCollectionOfObjectValues<Msdyusd_agentscriptaction>(createMsdyusd_agentscriptactionFromDiscriminatorValue); },
            "msdyusd_toolbarbutton_Annotations": (o, n) => { (o as unknown as Msdyusd_toolbarbutton).msdyusd_toolbarbutton_Annotations = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "msdyusd_toolbarbutton_AsyncOperations": (o, n) => { (o as unknown as Msdyusd_toolbarbutton).msdyusd_toolbarbutton_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyusd_toolbarbutton_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyusd_toolbarbutton).msdyusd_toolbarbutton_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyusd_toolbarbutton_connections1": (o, n) => { (o as unknown as Msdyusd_toolbarbutton).msdyusd_toolbarbutton_connections1 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "msdyusd_toolbarbutton_connections2": (o, n) => { (o as unknown as Msdyusd_toolbarbutton).msdyusd_toolbarbutton_connections2 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "msdyusd_toolbarbutton_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyusd_toolbarbutton).msdyusd_toolbarbutton_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyusd_toolbarbutton_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyusd_toolbarbutton).msdyusd_toolbarbutton_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyusd_toolbarbutton_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyusd_toolbarbutton).msdyusd_toolbarbutton_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyusd_toolbarbutton_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyusd_toolbarbutton).msdyusd_toolbarbutton_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyusd_toolbarbutton_ProcessSession": (o, n) => { (o as unknown as Msdyusd_toolbarbutton).msdyusd_toolbarbutton_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyusd_toolbarbutton_SyncErrors": (o, n) => { (o as unknown as Msdyusd_toolbarbutton).msdyusd_toolbarbutton_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyusd_toolbarbutton_toolbarbutton_Buttons": (o, n) => { (o as unknown as Msdyusd_toolbarbutton).msdyusd_toolbarbutton_toolbarbutton_Buttons = n.getCollectionOfObjectValues<Msdyusd_toolbarbutton>(createMsdyusd_toolbarbuttonFromDiscriminatorValue); },
            "msdyusd_toolbarbuttonid": (o, n) => { (o as unknown as Msdyusd_toolbarbutton).msdyusd_toolbarbuttonid = n.getStringValue(); },
            "msdyusd_ToolbarId": (o, n) => { (o as unknown as Msdyusd_toolbarbutton).msdyusd_ToolbarId = n.getObjectValue<Msdyusd_toolbarstrip>(createMsdyusd_toolbarstripFromDiscriminatorValue); },
            "msdyusd_tooltip": (o, n) => { (o as unknown as Msdyusd_toolbarbutton).msdyusd_tooltip = n.getStringValue(); },
            "msdyusd_visiblecondition": (o, n) => { (o as unknown as Msdyusd_toolbarbutton).msdyusd_visiblecondition = n.getStringValue(); },
            "msdyusd_webresourceurl": (o, n) => { (o as unknown as Msdyusd_toolbarbutton).msdyusd_webresourceurl = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyusd_toolbarbutton).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyusd_toolbarbutton).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyusd_toolbarbutton).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyusd_toolbarbutton).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyusd_toolbarbutton).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyusd_toolbarbutton).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyusd_toolbarbutton).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyusd_toolbarbutton).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyusd_toolbarbutton).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyusd_toolbarbutton).versionnumber = n.getNumberValue(); },
        };
    };
    /**
     * Gets the importsequencenumber property value. 
     * @returns a integer
     */
    public get importsequencenumber() {
        return this._importsequencenumber;
    };
    /**
     * Sets the importsequencenumber property value. 
     * @param value Value to set for the importsequencenumber property.
     */
    public set importsequencenumber(value: number | undefined) {
        this._importsequencenumber = value;
    };
    /**
     * Gets the modifiedby property value. 
     * @returns a systemuser
     */
    public get modifiedby() {
        return this._modifiedby;
    };
    /**
     * Sets the modifiedby property value. 
     * @param value Value to set for the modifiedby property.
     */
    public set modifiedby(value: Systemuser | undefined) {
        this._modifiedby = value;
    };
    /**
     * Gets the modifiedon property value. 
     * @returns a Date
     */
    public get modifiedon() {
        return this._modifiedon;
    };
    /**
     * Sets the modifiedon property value. 
     * @param value Value to set for the modifiedon property.
     */
    public set modifiedon(value: Date | undefined) {
        this._modifiedon = value;
    };
    /**
     * Gets the modifiedonbehalfby property value. 
     * @returns a systemuser
     */
    public get modifiedonbehalfby() {
        return this._modifiedonbehalfby;
    };
    /**
     * Sets the modifiedonbehalfby property value. 
     * @param value Value to set for the modifiedonbehalfby property.
     */
    public set modifiedonbehalfby(value: Systemuser | undefined) {
        this._modifiedonbehalfby = value;
    };
    /**
     * Gets the msdyusd_Buttons property value. 
     * @returns a msdyusd_toolbarbutton
     */
    public get msdyusd_Buttons() {
        return this._msdyusd_Buttons;
    };
    /**
     * Sets the msdyusd_Buttons property value. 
     * @param value Value to set for the msdyusd_Buttons property.
     */
    public set msdyusd_Buttons(value: Msdyusd_toolbarbutton | undefined) {
        this._msdyusd_Buttons = value;
    };
    /**
     * Gets the msdyusd_buttontext property value. 
     * @returns a string
     */
    public get msdyusd_buttontext() {
        return this._msdyusd_buttontext;
    };
    /**
     * Sets the msdyusd_buttontext property value. 
     * @param value Value to set for the msdyusd_buttontext property.
     */
    public set msdyusd_buttontext(value: string | undefined) {
        this._msdyusd_buttontext = value;
    };
    /**
     * Gets the msdyusd_enablecondition property value. 
     * @returns a integer
     */
    public get msdyusd_enablecondition() {
        return this._msdyusd_enablecondition;
    };
    /**
     * Sets the msdyusd_enablecondition property value. 
     * @param value Value to set for the msdyusd_enablecondition property.
     */
    public set msdyusd_enablecondition(value: number | undefined) {
        this._msdyusd_enablecondition = value;
    };
    /**
     * Gets the msdyusd_enabledcondition property value. 
     * @returns a string
     */
    public get msdyusd_enabledcondition() {
        return this._msdyusd_enabledcondition;
    };
    /**
     * Sets the msdyusd_enabledcondition property value. 
     * @param value Value to set for the msdyusd_enabledcondition property.
     */
    public set msdyusd_enabledcondition(value: string | undefined) {
        this._msdyusd_enabledcondition = value;
    };
    /**
     * Gets the msdyusd_image property value. 
     * @returns a string
     */
    public get msdyusd_image() {
        return this._msdyusd_image;
    };
    /**
     * Sets the msdyusd_image property value. 
     * @param value Value to set for the msdyusd_image property.
     */
    public set msdyusd_image(value: string | undefined) {
        this._msdyusd_image = value;
    };
    /**
     * Gets the msdyusd_name property value. 
     * @returns a string
     */
    public get msdyusd_name() {
        return this._msdyusd_name;
    };
    /**
     * Sets the msdyusd_name property value. 
     * @param value Value to set for the msdyusd_name property.
     */
    public set msdyusd_name(value: string | undefined) {
        this._msdyusd_name = value;
    };
    /**
     * Gets the msdyusd_order property value. 
     * @returns a integer
     */
    public get msdyusd_order() {
        return this._msdyusd_order;
    };
    /**
     * Sets the msdyusd_order property value. 
     * @param value Value to set for the msdyusd_order property.
     */
    public set msdyusd_order(value: number | undefined) {
        this._msdyusd_order = value;
    };
    /**
     * Gets the msdyusd_scriptcondition property value. 
     * @returns a string
     */
    public get msdyusd_scriptcondition() {
        return this._msdyusd_scriptcondition;
    };
    /**
     * Sets the msdyusd_scriptcondition property value. 
     * @param value Value to set for the msdyusd_scriptcondition property.
     */
    public set msdyusd_scriptcondition(value: string | undefined) {
        this._msdyusd_scriptcondition = value;
    };
    /**
     * Gets the msdyusd_shortcutkey property value. 
     * @returns a string
     */
    public get msdyusd_shortcutkey() {
        return this._msdyusd_shortcutkey;
    };
    /**
     * Sets the msdyusd_shortcutkey property value. 
     * @param value Value to set for the msdyusd_shortcutkey property.
     */
    public set msdyusd_shortcutkey(value: string | undefined) {
        this._msdyusd_shortcutkey = value;
    };
    /**
     * Gets the msdyusd_showtab property value. 
     * @returns a uii_hostedapplication
     */
    public get msdyusd_showtab() {
        return this._msdyusd_showtab;
    };
    /**
     * Sets the msdyusd_showtab property value. 
     * @param value Value to set for the msdyusd_showtab property.
     */
    public set msdyusd_showtab(value: Uii_hostedapplication | undefined) {
        this._msdyusd_showtab = value;
    };
    /**
     * Gets the msdyusd_toolbarbutton_agentscriptaction property value. 
     * @returns a msdyusd_agentscriptaction
     */
    public get msdyusd_toolbarbutton_agentscriptaction() {
        return this._msdyusd_toolbarbutton_agentscriptaction;
    };
    /**
     * Sets the msdyusd_toolbarbutton_agentscriptaction property value. 
     * @param value Value to set for the msdyusd_toolbarbutton_agentscriptaction property.
     */
    public set msdyusd_toolbarbutton_agentscriptaction(value: Msdyusd_agentscriptaction[] | undefined) {
        this._msdyusd_toolbarbutton_agentscriptaction = value;
    };
    /**
     * Gets the msdyusd_toolbarbutton_Annotations property value. 
     * @returns a annotation
     */
    public get msdyusd_toolbarbutton_Annotations() {
        return this._msdyusd_toolbarbutton_Annotations;
    };
    /**
     * Sets the msdyusd_toolbarbutton_Annotations property value. 
     * @param value Value to set for the msdyusd_toolbarbutton_Annotations property.
     */
    public set msdyusd_toolbarbutton_Annotations(value: Annotation[] | undefined) {
        this._msdyusd_toolbarbutton_Annotations = value;
    };
    /**
     * Gets the msdyusd_toolbarbutton_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyusd_toolbarbutton_AsyncOperations() {
        return this._msdyusd_toolbarbutton_AsyncOperations;
    };
    /**
     * Sets the msdyusd_toolbarbutton_AsyncOperations property value. 
     * @param value Value to set for the msdyusd_toolbarbutton_AsyncOperations property.
     */
    public set msdyusd_toolbarbutton_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyusd_toolbarbutton_AsyncOperations = value;
    };
    /**
     * Gets the msdyusd_toolbarbutton_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyusd_toolbarbutton_BulkDeleteFailures() {
        return this._msdyusd_toolbarbutton_BulkDeleteFailures;
    };
    /**
     * Sets the msdyusd_toolbarbutton_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyusd_toolbarbutton_BulkDeleteFailures property.
     */
    public set msdyusd_toolbarbutton_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyusd_toolbarbutton_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyusd_toolbarbutton_connections1 property value. 
     * @returns a connection
     */
    public get msdyusd_toolbarbutton_connections1() {
        return this._msdyusd_toolbarbutton_connections1;
    };
    /**
     * Sets the msdyusd_toolbarbutton_connections1 property value. 
     * @param value Value to set for the msdyusd_toolbarbutton_connections1 property.
     */
    public set msdyusd_toolbarbutton_connections1(value: Connection[] | undefined) {
        this._msdyusd_toolbarbutton_connections1 = value;
    };
    /**
     * Gets the msdyusd_toolbarbutton_connections2 property value. 
     * @returns a connection
     */
    public get msdyusd_toolbarbutton_connections2() {
        return this._msdyusd_toolbarbutton_connections2;
    };
    /**
     * Sets the msdyusd_toolbarbutton_connections2 property value. 
     * @param value Value to set for the msdyusd_toolbarbutton_connections2 property.
     */
    public set msdyusd_toolbarbutton_connections2(value: Connection[] | undefined) {
        this._msdyusd_toolbarbutton_connections2 = value;
    };
    /**
     * Gets the msdyusd_toolbarbutton_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyusd_toolbarbutton_DuplicateBaseRecord() {
        return this._msdyusd_toolbarbutton_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyusd_toolbarbutton_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyusd_toolbarbutton_DuplicateBaseRecord property.
     */
    public set msdyusd_toolbarbutton_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyusd_toolbarbutton_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyusd_toolbarbutton_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyusd_toolbarbutton_DuplicateMatchingRecord() {
        return this._msdyusd_toolbarbutton_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyusd_toolbarbutton_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyusd_toolbarbutton_DuplicateMatchingRecord property.
     */
    public set msdyusd_toolbarbutton_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyusd_toolbarbutton_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyusd_toolbarbutton_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyusd_toolbarbutton_MailboxTrackingFolders() {
        return this._msdyusd_toolbarbutton_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyusd_toolbarbutton_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyusd_toolbarbutton_MailboxTrackingFolders property.
     */
    public set msdyusd_toolbarbutton_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyusd_toolbarbutton_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyusd_toolbarbutton_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyusd_toolbarbutton_PrincipalObjectAttributeAccesses() {
        return this._msdyusd_toolbarbutton_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyusd_toolbarbutton_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyusd_toolbarbutton_PrincipalObjectAttributeAccesses property.
     */
    public set msdyusd_toolbarbutton_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyusd_toolbarbutton_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyusd_toolbarbutton_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyusd_toolbarbutton_ProcessSession() {
        return this._msdyusd_toolbarbutton_ProcessSession;
    };
    /**
     * Sets the msdyusd_toolbarbutton_ProcessSession property value. 
     * @param value Value to set for the msdyusd_toolbarbutton_ProcessSession property.
     */
    public set msdyusd_toolbarbutton_ProcessSession(value: Processsession[] | undefined) {
        this._msdyusd_toolbarbutton_ProcessSession = value;
    };
    /**
     * Gets the msdyusd_toolbarbutton_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyusd_toolbarbutton_SyncErrors() {
        return this._msdyusd_toolbarbutton_SyncErrors;
    };
    /**
     * Sets the msdyusd_toolbarbutton_SyncErrors property value. 
     * @param value Value to set for the msdyusd_toolbarbutton_SyncErrors property.
     */
    public set msdyusd_toolbarbutton_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyusd_toolbarbutton_SyncErrors = value;
    };
    /**
     * Gets the msdyusd_toolbarbutton_toolbarbutton_Buttons property value. 
     * @returns a msdyusd_toolbarbutton
     */
    public get msdyusd_toolbarbutton_toolbarbutton_Buttons() {
        return this._msdyusd_toolbarbutton_toolbarbutton_Buttons;
    };
    /**
     * Sets the msdyusd_toolbarbutton_toolbarbutton_Buttons property value. 
     * @param value Value to set for the msdyusd_toolbarbutton_toolbarbutton_Buttons property.
     */
    public set msdyusd_toolbarbutton_toolbarbutton_Buttons(value: Msdyusd_toolbarbutton[] | undefined) {
        this._msdyusd_toolbarbutton_toolbarbutton_Buttons = value;
    };
    /**
     * Gets the msdyusd_toolbarbuttonid property value. 
     * @returns a string
     */
    public get msdyusd_toolbarbuttonid() {
        return this._msdyusd_toolbarbuttonid;
    };
    /**
     * Sets the msdyusd_toolbarbuttonid property value. 
     * @param value Value to set for the msdyusd_toolbarbuttonid property.
     */
    public set msdyusd_toolbarbuttonid(value: string | undefined) {
        this._msdyusd_toolbarbuttonid = value;
    };
    /**
     * Gets the msdyusd_ToolbarId property value. 
     * @returns a msdyusd_toolbarstrip
     */
    public get msdyusd_ToolbarId() {
        return this._msdyusd_ToolbarId;
    };
    /**
     * Sets the msdyusd_ToolbarId property value. 
     * @param value Value to set for the msdyusd_ToolbarId property.
     */
    public set msdyusd_ToolbarId(value: Msdyusd_toolbarstrip | undefined) {
        this._msdyusd_ToolbarId = value;
    };
    /**
     * Gets the msdyusd_tooltip property value. 
     * @returns a string
     */
    public get msdyusd_tooltip() {
        return this._msdyusd_tooltip;
    };
    /**
     * Sets the msdyusd_tooltip property value. 
     * @param value Value to set for the msdyusd_tooltip property.
     */
    public set msdyusd_tooltip(value: string | undefined) {
        this._msdyusd_tooltip = value;
    };
    /**
     * Gets the msdyusd_visiblecondition property value. 
     * @returns a string
     */
    public get msdyusd_visiblecondition() {
        return this._msdyusd_visiblecondition;
    };
    /**
     * Sets the msdyusd_visiblecondition property value. 
     * @param value Value to set for the msdyusd_visiblecondition property.
     */
    public set msdyusd_visiblecondition(value: string | undefined) {
        this._msdyusd_visiblecondition = value;
    };
    /**
     * Gets the msdyusd_webresourceurl property value. 
     * @returns a string
     */
    public get msdyusd_webresourceurl() {
        return this._msdyusd_webresourceurl;
    };
    /**
     * Sets the msdyusd_webresourceurl property value. 
     * @param value Value to set for the msdyusd_webresourceurl property.
     */
    public set msdyusd_webresourceurl(value: string | undefined) {
        this._msdyusd_webresourceurl = value;
    };
    /**
     * Gets the overriddencreatedon property value. 
     * @returns a Date
     */
    public get overriddencreatedon() {
        return this._overriddencreatedon;
    };
    /**
     * Sets the overriddencreatedon property value. 
     * @param value Value to set for the overriddencreatedon property.
     */
    public set overriddencreatedon(value: Date | undefined) {
        this._overriddencreatedon = value;
    };
    /**
     * Gets the ownerid property value. 
     * @returns a principal
     */
    public get ownerid() {
        return this._ownerid;
    };
    /**
     * Sets the ownerid property value. 
     * @param value Value to set for the ownerid property.
     */
    public set ownerid(value: Principal | undefined) {
        this._ownerid = value;
    };
    /**
     * Gets the owningbusinessunit property value. 
     * @returns a businessunit
     */
    public get owningbusinessunit() {
        return this._owningbusinessunit;
    };
    /**
     * Sets the owningbusinessunit property value. 
     * @param value Value to set for the owningbusinessunit property.
     */
    public set owningbusinessunit(value: Businessunit | undefined) {
        this._owningbusinessunit = value;
    };
    /**
     * Gets the owningteam property value. 
     * @returns a team
     */
    public get owningteam() {
        return this._owningteam;
    };
    /**
     * Sets the owningteam property value. 
     * @param value Value to set for the owningteam property.
     */
    public set owningteam(value: Team | undefined) {
        this._owningteam = value;
    };
    /**
     * Gets the owninguser property value. 
     * @returns a systemuser
     */
    public get owninguser() {
        return this._owninguser;
    };
    /**
     * Sets the owninguser property value. 
     * @param value Value to set for the owninguser property.
     */
    public set owninguser(value: Systemuser | undefined) {
        this._owninguser = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_createdby_value", this._createdby_value);
        writer.writeStringValue("_createdonbehalfby_value", this._createdonbehalfby_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_msdyusd_buttons_value", this._msdyusd_buttons_value);
        writer.writeStringValue("_msdyusd_showtab_value", this._msdyusd_showtab_value);
        writer.writeStringValue("_msdyusd_toolbarid_value", this._msdyusd_toolbarid_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeObjectValue<Msdyusd_toolbarbutton>("msdyusd_Buttons", this.msdyusd_Buttons);
        writer.writeStringValue("msdyusd_buttontext", this.msdyusd_buttontext);
        writer.writeNumberValue("msdyusd_enablecondition", this.msdyusd_enablecondition);
        writer.writeStringValue("msdyusd_enabledcondition", this.msdyusd_enabledcondition);
        writer.writeStringValue("msdyusd_image", this.msdyusd_image);
        writer.writeStringValue("msdyusd_name", this.msdyusd_name);
        writer.writeNumberValue("msdyusd_order", this.msdyusd_order);
        writer.writeStringValue("msdyusd_scriptcondition", this.msdyusd_scriptcondition);
        writer.writeStringValue("msdyusd_shortcutkey", this.msdyusd_shortcutkey);
        writer.writeObjectValue<Uii_hostedapplication>("msdyusd_showtab", this.msdyusd_showtab);
        writer.writeCollectionOfObjectValues<Msdyusd_agentscriptaction>("msdyusd_toolbarbutton_agentscriptaction", this.msdyusd_toolbarbutton_agentscriptaction);
        writer.writeCollectionOfObjectValues<Annotation>("msdyusd_toolbarbutton_Annotations", this.msdyusd_toolbarbutton_Annotations);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyusd_toolbarbutton_AsyncOperations", this.msdyusd_toolbarbutton_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyusd_toolbarbutton_BulkDeleteFailures", this.msdyusd_toolbarbutton_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Connection>("msdyusd_toolbarbutton_connections1", this.msdyusd_toolbarbutton_connections1);
        writer.writeCollectionOfObjectValues<Connection>("msdyusd_toolbarbutton_connections2", this.msdyusd_toolbarbutton_connections2);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyusd_toolbarbutton_DuplicateBaseRecord", this.msdyusd_toolbarbutton_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyusd_toolbarbutton_DuplicateMatchingRecord", this.msdyusd_toolbarbutton_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyusd_toolbarbutton_MailboxTrackingFolders", this.msdyusd_toolbarbutton_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyusd_toolbarbutton_PrincipalObjectAttributeAccesses", this.msdyusd_toolbarbutton_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyusd_toolbarbutton_ProcessSession", this.msdyusd_toolbarbutton_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyusd_toolbarbutton_SyncErrors", this.msdyusd_toolbarbutton_SyncErrors);
        writer.writeCollectionOfObjectValues<Msdyusd_toolbarbutton>("msdyusd_toolbarbutton_toolbarbutton_Buttons", this.msdyusd_toolbarbutton_toolbarbutton_Buttons);
        writer.writeStringValue("msdyusd_toolbarbuttonid", this.msdyusd_toolbarbuttonid);
        writer.writeObjectValue<Msdyusd_toolbarstrip>("msdyusd_ToolbarId", this.msdyusd_ToolbarId);
        writer.writeStringValue("msdyusd_tooltip", this.msdyusd_tooltip);
        writer.writeStringValue("msdyusd_visiblecondition", this.msdyusd_visiblecondition);
        writer.writeStringValue("msdyusd_webresourceurl", this.msdyusd_webresourceurl);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the statecode property value. 
     * @returns a integer
     */
    public get statecode() {
        return this._statecode;
    };
    /**
     * Sets the statecode property value. 
     * @param value Value to set for the statecode property.
     */
    public set statecode(value: number | undefined) {
        this._statecode = value;
    };
    /**
     * Gets the statuscode property value. 
     * @returns a integer
     */
    public get statuscode() {
        return this._statuscode;
    };
    /**
     * Sets the statuscode property value. 
     * @param value Value to set for the statuscode property.
     */
    public set statuscode(value: number | undefined) {
        this._statuscode = value;
    };
    /**
     * Gets the timezoneruleversionnumber property value. 
     * @returns a integer
     */
    public get timezoneruleversionnumber() {
        return this._timezoneruleversionnumber;
    };
    /**
     * Sets the timezoneruleversionnumber property value. 
     * @param value Value to set for the timezoneruleversionnumber property.
     */
    public set timezoneruleversionnumber(value: number | undefined) {
        this._timezoneruleversionnumber = value;
    };
    /**
     * Gets the utcconversiontimezonecode property value. 
     * @returns a integer
     */
    public get utcconversiontimezonecode() {
        return this._utcconversiontimezonecode;
    };
    /**
     * Sets the utcconversiontimezonecode property value. 
     * @param value Value to set for the utcconversiontimezonecode property.
     */
    public set utcconversiontimezonecode(value: number | undefined) {
        this._utcconversiontimezonecode = value;
    };
    /**
     * Gets the versionnumber property value. 
     * @returns a int64
     */
    public get versionnumber() {
        return this._versionnumber;
    };
    /**
     * Sets the versionnumber property value. 
     * @param value Value to set for the versionnumber property.
     */
    public set versionnumber(value: number | undefined) {
        this._versionnumber = value;
    };
}
