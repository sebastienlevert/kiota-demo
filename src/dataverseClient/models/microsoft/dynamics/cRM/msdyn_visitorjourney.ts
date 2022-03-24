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

export class Msdyn_visitorjourney extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_ocliveworkitemid_value?: string | undefined;
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
    private _msdyn_displaytitle?: string | undefined;
    private _msdyn_endtime?: Date | undefined;
    private _msdyn_ocliveworkitemid?: Msdyn_ocliveworkitem | undefined;
    private _msdyn_starttime?: Date | undefined;
    private _msdyn_type?: number | undefined;
    private _msdyn_url?: string | undefined;
    private _msdyn_visitorjourney_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_visitorjourney_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_visitorjourney_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_visitorjourney_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_visitorjourney_ProcessSession?: Processsession[] | undefined;
    private _msdyn_visitorjourney_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_visitorjourneyid?: string | undefined;
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
     * Gets the _msdyn_ocliveworkitemid_value property value. 
     * @returns a string
     */
    public get _msdyn_ocliveworkitemid_value() {
        return this.__msdyn_ocliveworkitemid_value;
    };
    /**
     * Sets the _msdyn_ocliveworkitemid_value property value. 
     * @param value Value to set for the _msdyn_ocliveworkitemid_value property.
     */
    public set _msdyn_ocliveworkitemid_value(value: string | undefined) {
        this.__msdyn_ocliveworkitemid_value = value;
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
     * Instantiates a new msdyn_visitorjourney and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_visitorjourney)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_visitorjourney)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_visitorjourney)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_visitorjourney)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_ocliveworkitemid_value": (o, n) => { (o as unknown as Msdyn_visitorjourney)._msdyn_ocliveworkitemid_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_visitorjourney)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_visitorjourney)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_visitorjourney)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_visitorjourney)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_visitorjourney).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_visitorjourney).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_visitorjourney).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_visitorjourney).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_visitorjourney).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_visitorjourney).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_visitorjourney).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_displaytitle": (o, n) => { (o as unknown as Msdyn_visitorjourney).msdyn_displaytitle = n.getStringValue(); },
            "msdyn_endtime": (o, n) => { (o as unknown as Msdyn_visitorjourney).msdyn_endtime = n.getDateValue(); },
            "msdyn_ocliveworkitemid": (o, n) => { (o as unknown as Msdyn_visitorjourney).msdyn_ocliveworkitemid = n.getObjectValue<Msdyn_ocliveworkitem>(createMsdyn_ocliveworkitemFromDiscriminatorValue); },
            "msdyn_starttime": (o, n) => { (o as unknown as Msdyn_visitorjourney).msdyn_starttime = n.getDateValue(); },
            "msdyn_type": (o, n) => { (o as unknown as Msdyn_visitorjourney).msdyn_type = n.getNumberValue(); },
            "msdyn_url": (o, n) => { (o as unknown as Msdyn_visitorjourney).msdyn_url = n.getStringValue(); },
            "msdyn_visitorjourney_AsyncOperations": (o, n) => { (o as unknown as Msdyn_visitorjourney).msdyn_visitorjourney_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_visitorjourney_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_visitorjourney).msdyn_visitorjourney_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_visitorjourney_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_visitorjourney).msdyn_visitorjourney_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_visitorjourney_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_visitorjourney).msdyn_visitorjourney_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_visitorjourney_ProcessSession": (o, n) => { (o as unknown as Msdyn_visitorjourney).msdyn_visitorjourney_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_visitorjourney_SyncErrors": (o, n) => { (o as unknown as Msdyn_visitorjourney).msdyn_visitorjourney_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_visitorjourneyid": (o, n) => { (o as unknown as Msdyn_visitorjourney).msdyn_visitorjourneyid = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_visitorjourney).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_visitorjourney).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_visitorjourney).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_visitorjourney).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_visitorjourney).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_visitorjourney).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_visitorjourney).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_visitorjourney).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_visitorjourney).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_visitorjourney).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_displaytitle property value. 
     * @returns a string
     */
    public get msdyn_displaytitle() {
        return this._msdyn_displaytitle;
    };
    /**
     * Sets the msdyn_displaytitle property value. 
     * @param value Value to set for the msdyn_displaytitle property.
     */
    public set msdyn_displaytitle(value: string | undefined) {
        this._msdyn_displaytitle = value;
    };
    /**
     * Gets the msdyn_endtime property value. 
     * @returns a Date
     */
    public get msdyn_endtime() {
        return this._msdyn_endtime;
    };
    /**
     * Sets the msdyn_endtime property value. 
     * @param value Value to set for the msdyn_endtime property.
     */
    public set msdyn_endtime(value: Date | undefined) {
        this._msdyn_endtime = value;
    };
    /**
     * Gets the msdyn_ocliveworkitemid property value. 
     * @returns a msdyn_ocliveworkitem
     */
    public get msdyn_ocliveworkitemid() {
        return this._msdyn_ocliveworkitemid;
    };
    /**
     * Sets the msdyn_ocliveworkitemid property value. 
     * @param value Value to set for the msdyn_ocliveworkitemid property.
     */
    public set msdyn_ocliveworkitemid(value: Msdyn_ocliveworkitem | undefined) {
        this._msdyn_ocliveworkitemid = value;
    };
    /**
     * Gets the msdyn_starttime property value. 
     * @returns a Date
     */
    public get msdyn_starttime() {
        return this._msdyn_starttime;
    };
    /**
     * Sets the msdyn_starttime property value. 
     * @param value Value to set for the msdyn_starttime property.
     */
    public set msdyn_starttime(value: Date | undefined) {
        this._msdyn_starttime = value;
    };
    /**
     * Gets the msdyn_type property value. 
     * @returns a integer
     */
    public get msdyn_type() {
        return this._msdyn_type;
    };
    /**
     * Sets the msdyn_type property value. 
     * @param value Value to set for the msdyn_type property.
     */
    public set msdyn_type(value: number | undefined) {
        this._msdyn_type = value;
    };
    /**
     * Gets the msdyn_url property value. 
     * @returns a string
     */
    public get msdyn_url() {
        return this._msdyn_url;
    };
    /**
     * Sets the msdyn_url property value. 
     * @param value Value to set for the msdyn_url property.
     */
    public set msdyn_url(value: string | undefined) {
        this._msdyn_url = value;
    };
    /**
     * Gets the msdyn_visitorjourney_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_visitorjourney_AsyncOperations() {
        return this._msdyn_visitorjourney_AsyncOperations;
    };
    /**
     * Sets the msdyn_visitorjourney_AsyncOperations property value. 
     * @param value Value to set for the msdyn_visitorjourney_AsyncOperations property.
     */
    public set msdyn_visitorjourney_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_visitorjourney_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_visitorjourney_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_visitorjourney_BulkDeleteFailures() {
        return this._msdyn_visitorjourney_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_visitorjourney_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_visitorjourney_BulkDeleteFailures property.
     */
    public set msdyn_visitorjourney_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_visitorjourney_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_visitorjourney_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_visitorjourney_MailboxTrackingFolders() {
        return this._msdyn_visitorjourney_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_visitorjourney_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_visitorjourney_MailboxTrackingFolders property.
     */
    public set msdyn_visitorjourney_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_visitorjourney_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_visitorjourney_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_visitorjourney_PrincipalObjectAttributeAccesses() {
        return this._msdyn_visitorjourney_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_visitorjourney_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_visitorjourney_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_visitorjourney_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_visitorjourney_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_visitorjourney_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_visitorjourney_ProcessSession() {
        return this._msdyn_visitorjourney_ProcessSession;
    };
    /**
     * Sets the msdyn_visitorjourney_ProcessSession property value. 
     * @param value Value to set for the msdyn_visitorjourney_ProcessSession property.
     */
    public set msdyn_visitorjourney_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_visitorjourney_ProcessSession = value;
    };
    /**
     * Gets the msdyn_visitorjourney_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_visitorjourney_SyncErrors() {
        return this._msdyn_visitorjourney_SyncErrors;
    };
    /**
     * Sets the msdyn_visitorjourney_SyncErrors property value. 
     * @param value Value to set for the msdyn_visitorjourney_SyncErrors property.
     */
    public set msdyn_visitorjourney_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_visitorjourney_SyncErrors = value;
    };
    /**
     * Gets the msdyn_visitorjourneyid property value. 
     * @returns a string
     */
    public get msdyn_visitorjourneyid() {
        return this._msdyn_visitorjourneyid;
    };
    /**
     * Sets the msdyn_visitorjourneyid property value. 
     * @param value Value to set for the msdyn_visitorjourneyid property.
     */
    public set msdyn_visitorjourneyid(value: string | undefined) {
        this._msdyn_visitorjourneyid = value;
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
        writer.writeStringValue("_msdyn_ocliveworkitemid_value", this._msdyn_ocliveworkitemid_value);
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
        writer.writeStringValue("msdyn_displaytitle", this.msdyn_displaytitle);
        writer.writeDateValue("msdyn_endtime", this.msdyn_endtime);
        writer.writeObjectValue<Msdyn_ocliveworkitem>("msdyn_ocliveworkitemid", this.msdyn_ocliveworkitemid);
        writer.writeDateValue("msdyn_starttime", this.msdyn_starttime);
        writer.writeNumberValue("msdyn_type", this.msdyn_type);
        writer.writeStringValue("msdyn_url", this.msdyn_url);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_visitorjourney_AsyncOperations", this.msdyn_visitorjourney_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_visitorjourney_BulkDeleteFailures", this.msdyn_visitorjourney_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_visitorjourney_MailboxTrackingFolders", this.msdyn_visitorjourney_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_visitorjourney_PrincipalObjectAttributeAccesses", this.msdyn_visitorjourney_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_visitorjourney_ProcessSession", this.msdyn_visitorjourney_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_visitorjourney_SyncErrors", this.msdyn_visitorjourney_SyncErrors);
        writer.writeStringValue("msdyn_visitorjourneyid", this.msdyn_visitorjourneyid);
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
