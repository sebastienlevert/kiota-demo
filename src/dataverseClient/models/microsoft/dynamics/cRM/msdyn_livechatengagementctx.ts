import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_ocliveworkitemFromDiscriminatorValue} from './createMsdyn_ocliveworkitemFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Mailboxtrackingfolder, Msdyn_ocliveworkitem, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_livechatengagementctx extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_liveworkitemid_value?: string | undefined;
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
    private _msdyn_browser?: string | undefined;
    private _msdyn_city?: string | undefined;
    private _msdyn_country?: string | undefined;
    private _msdyn_device?: string | undefined;
    private _msdyn_isauthenticated?: boolean | undefined;
    private _msdyn_isproactivechat?: boolean | undefined;
    private _msdyn_latitude?: string | undefined;
    private _msdyn_livechatengagementctx_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_livechatengagementctx_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_livechatengagementctx_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_livechatengagementctx_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_livechatengagementctx_ProcessSession?: Processsession[] | undefined;
    private _msdyn_livechatengagementctx_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_livechatengagementctxid?: string | undefined;
    private _msdyn_livechatengagementid?: string | undefined;
    private _msdyn_liveworkitemid?: Msdyn_ocliveworkitem | undefined;
    private _msdyn_locale?: string | undefined;
    private _msdyn_longitude?: string | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_originurl?: string | undefined;
    private _msdyn_os?: string | undefined;
    private _msdyn_portalcontactid?: string | undefined;
    private _msdyn_postalcode?: string | undefined;
    private _msdyn_state?: string | undefined;
    private _msdyn_street1?: string | undefined;
    private _msdyn_street2?: string | undefined;
    private _msdyn_street3?: string | undefined;
    private _msdyn_widgetappid?: string | undefined;
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
     * Gets the _msdyn_liveworkitemid_value property value. 
     * @returns a string
     */
    public get _msdyn_liveworkitemid_value() {
        return this.__msdyn_liveworkitemid_value;
    };
    /**
     * Sets the _msdyn_liveworkitemid_value property value. 
     * @param value Value to set for the _msdyn_liveworkitemid_value property.
     */
    public set _msdyn_liveworkitemid_value(value: string | undefined) {
        this.__msdyn_liveworkitemid_value = value;
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
     * Instantiates a new msdyn_livechatengagementctx and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_livechatengagementctx)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_livechatengagementctx)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_livechatengagementctx)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_livechatengagementctx)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_liveworkitemid_value": (o, n) => { (o as unknown as Msdyn_livechatengagementctx)._msdyn_liveworkitemid_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_livechatengagementctx)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_livechatengagementctx)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_livechatengagementctx)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_livechatengagementctx)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_livechatengagementctx).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_livechatengagementctx).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_livechatengagementctx).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_livechatengagementctx).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_livechatengagementctx).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_livechatengagementctx).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_livechatengagementctx).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_browser": (o, n) => { (o as unknown as Msdyn_livechatengagementctx).msdyn_browser = n.getStringValue(); },
            "msdyn_city": (o, n) => { (o as unknown as Msdyn_livechatengagementctx).msdyn_city = n.getStringValue(); },
            "msdyn_country": (o, n) => { (o as unknown as Msdyn_livechatengagementctx).msdyn_country = n.getStringValue(); },
            "msdyn_device": (o, n) => { (o as unknown as Msdyn_livechatengagementctx).msdyn_device = n.getStringValue(); },
            "msdyn_isauthenticated": (o, n) => { (o as unknown as Msdyn_livechatengagementctx).msdyn_isauthenticated = n.getBooleanValue(); },
            "msdyn_isproactivechat": (o, n) => { (o as unknown as Msdyn_livechatengagementctx).msdyn_isproactivechat = n.getBooleanValue(); },
            "msdyn_latitude": (o, n) => { (o as unknown as Msdyn_livechatengagementctx).msdyn_latitude = n.getStringValue(); },
            "msdyn_livechatengagementctx_AsyncOperations": (o, n) => { (o as unknown as Msdyn_livechatengagementctx).msdyn_livechatengagementctx_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_livechatengagementctx_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_livechatengagementctx).msdyn_livechatengagementctx_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_livechatengagementctx_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_livechatengagementctx).msdyn_livechatengagementctx_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_livechatengagementctx_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_livechatengagementctx).msdyn_livechatengagementctx_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_livechatengagementctx_ProcessSession": (o, n) => { (o as unknown as Msdyn_livechatengagementctx).msdyn_livechatengagementctx_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_livechatengagementctx_SyncErrors": (o, n) => { (o as unknown as Msdyn_livechatengagementctx).msdyn_livechatengagementctx_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_livechatengagementctxid": (o, n) => { (o as unknown as Msdyn_livechatengagementctx).msdyn_livechatengagementctxid = n.getStringValue(); },
            "msdyn_livechatengagementid": (o, n) => { (o as unknown as Msdyn_livechatengagementctx).msdyn_livechatengagementid = n.getStringValue(); },
            "msdyn_liveworkitemid": (o, n) => { (o as unknown as Msdyn_livechatengagementctx).msdyn_liveworkitemid = n.getObjectValue<Msdyn_ocliveworkitem>(createMsdyn_ocliveworkitemFromDiscriminatorValue); },
            "msdyn_locale": (o, n) => { (o as unknown as Msdyn_livechatengagementctx).msdyn_locale = n.getStringValue(); },
            "msdyn_longitude": (o, n) => { (o as unknown as Msdyn_livechatengagementctx).msdyn_longitude = n.getStringValue(); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_livechatengagementctx).msdyn_name = n.getStringValue(); },
            "msdyn_originurl": (o, n) => { (o as unknown as Msdyn_livechatengagementctx).msdyn_originurl = n.getStringValue(); },
            "msdyn_os": (o, n) => { (o as unknown as Msdyn_livechatengagementctx).msdyn_os = n.getStringValue(); },
            "msdyn_portalcontactid": (o, n) => { (o as unknown as Msdyn_livechatengagementctx).msdyn_portalcontactid = n.getStringValue(); },
            "msdyn_postalcode": (o, n) => { (o as unknown as Msdyn_livechatengagementctx).msdyn_postalcode = n.getStringValue(); },
            "msdyn_state": (o, n) => { (o as unknown as Msdyn_livechatengagementctx).msdyn_state = n.getStringValue(); },
            "msdyn_street1": (o, n) => { (o as unknown as Msdyn_livechatengagementctx).msdyn_street1 = n.getStringValue(); },
            "msdyn_street2": (o, n) => { (o as unknown as Msdyn_livechatengagementctx).msdyn_street2 = n.getStringValue(); },
            "msdyn_street3": (o, n) => { (o as unknown as Msdyn_livechatengagementctx).msdyn_street3 = n.getStringValue(); },
            "msdyn_widgetappid": (o, n) => { (o as unknown as Msdyn_livechatengagementctx).msdyn_widgetappid = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_livechatengagementctx).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_livechatengagementctx).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_livechatengagementctx).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_livechatengagementctx).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_livechatengagementctx).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_livechatengagementctx).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_livechatengagementctx).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_livechatengagementctx).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_livechatengagementctx).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_livechatengagementctx).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_browser property value. 
     * @returns a string
     */
    public get msdyn_browser() {
        return this._msdyn_browser;
    };
    /**
     * Sets the msdyn_browser property value. 
     * @param value Value to set for the msdyn_browser property.
     */
    public set msdyn_browser(value: string | undefined) {
        this._msdyn_browser = value;
    };
    /**
     * Gets the msdyn_city property value. 
     * @returns a string
     */
    public get msdyn_city() {
        return this._msdyn_city;
    };
    /**
     * Sets the msdyn_city property value. 
     * @param value Value to set for the msdyn_city property.
     */
    public set msdyn_city(value: string | undefined) {
        this._msdyn_city = value;
    };
    /**
     * Gets the msdyn_country property value. 
     * @returns a string
     */
    public get msdyn_country() {
        return this._msdyn_country;
    };
    /**
     * Sets the msdyn_country property value. 
     * @param value Value to set for the msdyn_country property.
     */
    public set msdyn_country(value: string | undefined) {
        this._msdyn_country = value;
    };
    /**
     * Gets the msdyn_device property value. 
     * @returns a string
     */
    public get msdyn_device() {
        return this._msdyn_device;
    };
    /**
     * Sets the msdyn_device property value. 
     * @param value Value to set for the msdyn_device property.
     */
    public set msdyn_device(value: string | undefined) {
        this._msdyn_device = value;
    };
    /**
     * Gets the msdyn_isauthenticated property value. 
     * @returns a boolean
     */
    public get msdyn_isauthenticated() {
        return this._msdyn_isauthenticated;
    };
    /**
     * Sets the msdyn_isauthenticated property value. 
     * @param value Value to set for the msdyn_isauthenticated property.
     */
    public set msdyn_isauthenticated(value: boolean | undefined) {
        this._msdyn_isauthenticated = value;
    };
    /**
     * Gets the msdyn_isproactivechat property value. 
     * @returns a boolean
     */
    public get msdyn_isproactivechat() {
        return this._msdyn_isproactivechat;
    };
    /**
     * Sets the msdyn_isproactivechat property value. 
     * @param value Value to set for the msdyn_isproactivechat property.
     */
    public set msdyn_isproactivechat(value: boolean | undefined) {
        this._msdyn_isproactivechat = value;
    };
    /**
     * Gets the msdyn_latitude property value. 
     * @returns a string
     */
    public get msdyn_latitude() {
        return this._msdyn_latitude;
    };
    /**
     * Sets the msdyn_latitude property value. 
     * @param value Value to set for the msdyn_latitude property.
     */
    public set msdyn_latitude(value: string | undefined) {
        this._msdyn_latitude = value;
    };
    /**
     * Gets the msdyn_livechatengagementctx_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_livechatengagementctx_AsyncOperations() {
        return this._msdyn_livechatengagementctx_AsyncOperations;
    };
    /**
     * Sets the msdyn_livechatengagementctx_AsyncOperations property value. 
     * @param value Value to set for the msdyn_livechatengagementctx_AsyncOperations property.
     */
    public set msdyn_livechatengagementctx_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_livechatengagementctx_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_livechatengagementctx_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_livechatengagementctx_BulkDeleteFailures() {
        return this._msdyn_livechatengagementctx_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_livechatengagementctx_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_livechatengagementctx_BulkDeleteFailures property.
     */
    public set msdyn_livechatengagementctx_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_livechatengagementctx_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_livechatengagementctx_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_livechatengagementctx_MailboxTrackingFolders() {
        return this._msdyn_livechatengagementctx_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_livechatengagementctx_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_livechatengagementctx_MailboxTrackingFolders property.
     */
    public set msdyn_livechatengagementctx_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_livechatengagementctx_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_livechatengagementctx_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_livechatengagementctx_PrincipalObjectAttributeAccesses() {
        return this._msdyn_livechatengagementctx_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_livechatengagementctx_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_livechatengagementctx_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_livechatengagementctx_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_livechatengagementctx_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_livechatengagementctx_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_livechatengagementctx_ProcessSession() {
        return this._msdyn_livechatengagementctx_ProcessSession;
    };
    /**
     * Sets the msdyn_livechatengagementctx_ProcessSession property value. 
     * @param value Value to set for the msdyn_livechatengagementctx_ProcessSession property.
     */
    public set msdyn_livechatengagementctx_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_livechatengagementctx_ProcessSession = value;
    };
    /**
     * Gets the msdyn_livechatengagementctx_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_livechatengagementctx_SyncErrors() {
        return this._msdyn_livechatengagementctx_SyncErrors;
    };
    /**
     * Sets the msdyn_livechatengagementctx_SyncErrors property value. 
     * @param value Value to set for the msdyn_livechatengagementctx_SyncErrors property.
     */
    public set msdyn_livechatengagementctx_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_livechatengagementctx_SyncErrors = value;
    };
    /**
     * Gets the msdyn_livechatengagementctxid property value. 
     * @returns a string
     */
    public get msdyn_livechatengagementctxid() {
        return this._msdyn_livechatengagementctxid;
    };
    /**
     * Sets the msdyn_livechatengagementctxid property value. 
     * @param value Value to set for the msdyn_livechatengagementctxid property.
     */
    public set msdyn_livechatengagementctxid(value: string | undefined) {
        this._msdyn_livechatengagementctxid = value;
    };
    /**
     * Gets the msdyn_livechatengagementid property value. 
     * @returns a string
     */
    public get msdyn_livechatengagementid() {
        return this._msdyn_livechatengagementid;
    };
    /**
     * Sets the msdyn_livechatengagementid property value. 
     * @param value Value to set for the msdyn_livechatengagementid property.
     */
    public set msdyn_livechatengagementid(value: string | undefined) {
        this._msdyn_livechatengagementid = value;
    };
    /**
     * Gets the msdyn_liveworkitemid property value. 
     * @returns a msdyn_ocliveworkitem
     */
    public get msdyn_liveworkitemid() {
        return this._msdyn_liveworkitemid;
    };
    /**
     * Sets the msdyn_liveworkitemid property value. 
     * @param value Value to set for the msdyn_liveworkitemid property.
     */
    public set msdyn_liveworkitemid(value: Msdyn_ocliveworkitem | undefined) {
        this._msdyn_liveworkitemid = value;
    };
    /**
     * Gets the msdyn_locale property value. 
     * @returns a string
     */
    public get msdyn_locale() {
        return this._msdyn_locale;
    };
    /**
     * Sets the msdyn_locale property value. 
     * @param value Value to set for the msdyn_locale property.
     */
    public set msdyn_locale(value: string | undefined) {
        this._msdyn_locale = value;
    };
    /**
     * Gets the msdyn_longitude property value. 
     * @returns a string
     */
    public get msdyn_longitude() {
        return this._msdyn_longitude;
    };
    /**
     * Sets the msdyn_longitude property value. 
     * @param value Value to set for the msdyn_longitude property.
     */
    public set msdyn_longitude(value: string | undefined) {
        this._msdyn_longitude = value;
    };
    /**
     * Gets the msdyn_name property value. 
     * @returns a string
     */
    public get msdyn_name() {
        return this._msdyn_name;
    };
    /**
     * Sets the msdyn_name property value. 
     * @param value Value to set for the msdyn_name property.
     */
    public set msdyn_name(value: string | undefined) {
        this._msdyn_name = value;
    };
    /**
     * Gets the msdyn_originurl property value. 
     * @returns a string
     */
    public get msdyn_originurl() {
        return this._msdyn_originurl;
    };
    /**
     * Sets the msdyn_originurl property value. 
     * @param value Value to set for the msdyn_originurl property.
     */
    public set msdyn_originurl(value: string | undefined) {
        this._msdyn_originurl = value;
    };
    /**
     * Gets the msdyn_os property value. 
     * @returns a string
     */
    public get msdyn_os() {
        return this._msdyn_os;
    };
    /**
     * Sets the msdyn_os property value. 
     * @param value Value to set for the msdyn_os property.
     */
    public set msdyn_os(value: string | undefined) {
        this._msdyn_os = value;
    };
    /**
     * Gets the msdyn_portalcontactid property value. 
     * @returns a string
     */
    public get msdyn_portalcontactid() {
        return this._msdyn_portalcontactid;
    };
    /**
     * Sets the msdyn_portalcontactid property value. 
     * @param value Value to set for the msdyn_portalcontactid property.
     */
    public set msdyn_portalcontactid(value: string | undefined) {
        this._msdyn_portalcontactid = value;
    };
    /**
     * Gets the msdyn_postalcode property value. 
     * @returns a string
     */
    public get msdyn_postalcode() {
        return this._msdyn_postalcode;
    };
    /**
     * Sets the msdyn_postalcode property value. 
     * @param value Value to set for the msdyn_postalcode property.
     */
    public set msdyn_postalcode(value: string | undefined) {
        this._msdyn_postalcode = value;
    };
    /**
     * Gets the msdyn_state property value. 
     * @returns a string
     */
    public get msdyn_state() {
        return this._msdyn_state;
    };
    /**
     * Sets the msdyn_state property value. 
     * @param value Value to set for the msdyn_state property.
     */
    public set msdyn_state(value: string | undefined) {
        this._msdyn_state = value;
    };
    /**
     * Gets the msdyn_street1 property value. 
     * @returns a string
     */
    public get msdyn_street1() {
        return this._msdyn_street1;
    };
    /**
     * Sets the msdyn_street1 property value. 
     * @param value Value to set for the msdyn_street1 property.
     */
    public set msdyn_street1(value: string | undefined) {
        this._msdyn_street1 = value;
    };
    /**
     * Gets the msdyn_street2 property value. 
     * @returns a string
     */
    public get msdyn_street2() {
        return this._msdyn_street2;
    };
    /**
     * Sets the msdyn_street2 property value. 
     * @param value Value to set for the msdyn_street2 property.
     */
    public set msdyn_street2(value: string | undefined) {
        this._msdyn_street2 = value;
    };
    /**
     * Gets the msdyn_street3 property value. 
     * @returns a string
     */
    public get msdyn_street3() {
        return this._msdyn_street3;
    };
    /**
     * Sets the msdyn_street3 property value. 
     * @param value Value to set for the msdyn_street3 property.
     */
    public set msdyn_street3(value: string | undefined) {
        this._msdyn_street3 = value;
    };
    /**
     * Gets the msdyn_widgetappid property value. 
     * @returns a string
     */
    public get msdyn_widgetappid() {
        return this._msdyn_widgetappid;
    };
    /**
     * Sets the msdyn_widgetappid property value. 
     * @param value Value to set for the msdyn_widgetappid property.
     */
    public set msdyn_widgetappid(value: string | undefined) {
        this._msdyn_widgetappid = value;
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
        writer.writeStringValue("_msdyn_liveworkitemid_value", this._msdyn_liveworkitemid_value);
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
        writer.writeStringValue("msdyn_browser", this.msdyn_browser);
        writer.writeStringValue("msdyn_city", this.msdyn_city);
        writer.writeStringValue("msdyn_country", this.msdyn_country);
        writer.writeStringValue("msdyn_device", this.msdyn_device);
        writer.writeBooleanValue("msdyn_isauthenticated", this.msdyn_isauthenticated);
        writer.writeBooleanValue("msdyn_isproactivechat", this.msdyn_isproactivechat);
        writer.writeStringValue("msdyn_latitude", this.msdyn_latitude);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_livechatengagementctx_AsyncOperations", this.msdyn_livechatengagementctx_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_livechatengagementctx_BulkDeleteFailures", this.msdyn_livechatengagementctx_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_livechatengagementctx_MailboxTrackingFolders", this.msdyn_livechatengagementctx_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_livechatengagementctx_PrincipalObjectAttributeAccesses", this.msdyn_livechatengagementctx_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_livechatengagementctx_ProcessSession", this.msdyn_livechatengagementctx_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_livechatengagementctx_SyncErrors", this.msdyn_livechatengagementctx_SyncErrors);
        writer.writeStringValue("msdyn_livechatengagementctxid", this.msdyn_livechatengagementctxid);
        writer.writeStringValue("msdyn_livechatengagementid", this.msdyn_livechatengagementid);
        writer.writeObjectValue<Msdyn_ocliveworkitem>("msdyn_liveworkitemid", this.msdyn_liveworkitemid);
        writer.writeStringValue("msdyn_locale", this.msdyn_locale);
        writer.writeStringValue("msdyn_longitude", this.msdyn_longitude);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeStringValue("msdyn_originurl", this.msdyn_originurl);
        writer.writeStringValue("msdyn_os", this.msdyn_os);
        writer.writeStringValue("msdyn_portalcontactid", this.msdyn_portalcontactid);
        writer.writeStringValue("msdyn_postalcode", this.msdyn_postalcode);
        writer.writeStringValue("msdyn_state", this.msdyn_state);
        writer.writeStringValue("msdyn_street1", this.msdyn_street1);
        writer.writeStringValue("msdyn_street2", this.msdyn_street2);
        writer.writeStringValue("msdyn_street3", this.msdyn_street3);
        writer.writeStringValue("msdyn_widgetappid", this.msdyn_widgetappid);
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
