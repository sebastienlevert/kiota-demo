import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_ocbotchannelregistrationFromDiscriminatorValue} from './createMsdyn_ocbotchannelregistrationFromDiscriminatorValue';
import {createMsdyn_ocfbpageFromDiscriminatorValue} from './createMsdyn_ocfbpageFromDiscriminatorValue';
import {createMsdyn_ocprovisioningstateFromDiscriminatorValue} from './createMsdyn_ocprovisioningstateFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_ocbotchannelregistration, Msdyn_ocfbpage, Msdyn_ocprovisioningstate, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_ocfbapplication extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
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
    private _msdyn_fbapplicationid?: string | undefined;
    private _msdyn_fbapplicationsecret?: string | undefined;
    private _msdyn_fbcallbackuri?: string | undefined;
    private _msdyn_fbverifytoken?: string | undefined;
    private _msdyn_msdyn_ocfbapplication_msdyn_ocbotchannelregistration?: Msdyn_ocbotchannelregistration[] | undefined;
    private _msdyn_msdyn_ocfbapplication_msdyn_ocfbpage?: Msdyn_ocfbpage[] | undefined;
    private _msdyn_msdyn_ocfbapplication_msdyn_ocprovisioningstate?: Msdyn_ocprovisioningstate[] | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_ocfbapplication_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_ocfbapplication_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_ocfbapplication_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_ocfbapplication_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_ocfbapplication_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_ocfbapplication_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_ocfbapplication_ProcessSession?: Processsession[] | undefined;
    private _msdyn_ocfbapplication_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_ocfbapplicationid?: string | undefined;
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
     * Instantiates a new msdyn_ocfbapplication and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_ocfbapplication)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_ocfbapplication)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_ocfbapplication)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_ocfbapplication)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_ocfbapplication)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_ocfbapplication)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_ocfbapplication)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_ocfbapplication)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_ocfbapplication).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_ocfbapplication).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_ocfbapplication).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_ocfbapplication).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_ocfbapplication).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_ocfbapplication).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_ocfbapplication).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_fbapplicationid": (o, n) => { (o as unknown as Msdyn_ocfbapplication).msdyn_fbapplicationid = n.getStringValue(); },
            "msdyn_fbapplicationsecret": (o, n) => { (o as unknown as Msdyn_ocfbapplication).msdyn_fbapplicationsecret = n.getStringValue(); },
            "msdyn_fbcallbackuri": (o, n) => { (o as unknown as Msdyn_ocfbapplication).msdyn_fbcallbackuri = n.getStringValue(); },
            "msdyn_fbverifytoken": (o, n) => { (o as unknown as Msdyn_ocfbapplication).msdyn_fbverifytoken = n.getStringValue(); },
            "msdyn_msdyn_ocfbapplication_msdyn_ocbotchannelregistration": (o, n) => { (o as unknown as Msdyn_ocfbapplication).msdyn_msdyn_ocfbapplication_msdyn_ocbotchannelregistration = n.getCollectionOfObjectValues<Msdyn_ocbotchannelregistration>(createMsdyn_ocbotchannelregistrationFromDiscriminatorValue); },
            "msdyn_msdyn_ocfbapplication_msdyn_ocfbpage": (o, n) => { (o as unknown as Msdyn_ocfbapplication).msdyn_msdyn_ocfbapplication_msdyn_ocfbpage = n.getCollectionOfObjectValues<Msdyn_ocfbpage>(createMsdyn_ocfbpageFromDiscriminatorValue); },
            "msdyn_msdyn_ocfbapplication_msdyn_ocprovisioningstate": (o, n) => { (o as unknown as Msdyn_ocfbapplication).msdyn_msdyn_ocfbapplication_msdyn_ocprovisioningstate = n.getCollectionOfObjectValues<Msdyn_ocprovisioningstate>(createMsdyn_ocprovisioningstateFromDiscriminatorValue); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_ocfbapplication).msdyn_name = n.getStringValue(); },
            "msdyn_ocfbapplication_AsyncOperations": (o, n) => { (o as unknown as Msdyn_ocfbapplication).msdyn_ocfbapplication_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_ocfbapplication_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_ocfbapplication).msdyn_ocfbapplication_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_ocfbapplication_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_ocfbapplication).msdyn_ocfbapplication_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_ocfbapplication_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_ocfbapplication).msdyn_ocfbapplication_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_ocfbapplication_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_ocfbapplication).msdyn_ocfbapplication_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_ocfbapplication_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_ocfbapplication).msdyn_ocfbapplication_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_ocfbapplication_ProcessSession": (o, n) => { (o as unknown as Msdyn_ocfbapplication).msdyn_ocfbapplication_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_ocfbapplication_SyncErrors": (o, n) => { (o as unknown as Msdyn_ocfbapplication).msdyn_ocfbapplication_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_ocfbapplicationid": (o, n) => { (o as unknown as Msdyn_ocfbapplication).msdyn_ocfbapplicationid = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_ocfbapplication).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_ocfbapplication).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_ocfbapplication).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_ocfbapplication).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_ocfbapplication).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_ocfbapplication).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_ocfbapplication).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_ocfbapplication).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_ocfbapplication).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_ocfbapplication).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_fbapplicationid property value. 
     * @returns a string
     */
    public get msdyn_fbapplicationid() {
        return this._msdyn_fbapplicationid;
    };
    /**
     * Sets the msdyn_fbapplicationid property value. 
     * @param value Value to set for the msdyn_fbapplicationid property.
     */
    public set msdyn_fbapplicationid(value: string | undefined) {
        this._msdyn_fbapplicationid = value;
    };
    /**
     * Gets the msdyn_fbapplicationsecret property value. 
     * @returns a string
     */
    public get msdyn_fbapplicationsecret() {
        return this._msdyn_fbapplicationsecret;
    };
    /**
     * Sets the msdyn_fbapplicationsecret property value. 
     * @param value Value to set for the msdyn_fbapplicationsecret property.
     */
    public set msdyn_fbapplicationsecret(value: string | undefined) {
        this._msdyn_fbapplicationsecret = value;
    };
    /**
     * Gets the msdyn_fbcallbackuri property value. 
     * @returns a string
     */
    public get msdyn_fbcallbackuri() {
        return this._msdyn_fbcallbackuri;
    };
    /**
     * Sets the msdyn_fbcallbackuri property value. 
     * @param value Value to set for the msdyn_fbcallbackuri property.
     */
    public set msdyn_fbcallbackuri(value: string | undefined) {
        this._msdyn_fbcallbackuri = value;
    };
    /**
     * Gets the msdyn_fbverifytoken property value. 
     * @returns a string
     */
    public get msdyn_fbverifytoken() {
        return this._msdyn_fbverifytoken;
    };
    /**
     * Sets the msdyn_fbverifytoken property value. 
     * @param value Value to set for the msdyn_fbverifytoken property.
     */
    public set msdyn_fbverifytoken(value: string | undefined) {
        this._msdyn_fbverifytoken = value;
    };
    /**
     * Gets the msdyn_msdyn_ocfbapplication_msdyn_ocbotchannelregistration property value. 
     * @returns a msdyn_ocbotchannelregistration
     */
    public get msdyn_msdyn_ocfbapplication_msdyn_ocbotchannelregistration() {
        return this._msdyn_msdyn_ocfbapplication_msdyn_ocbotchannelregistration;
    };
    /**
     * Sets the msdyn_msdyn_ocfbapplication_msdyn_ocbotchannelregistration property value. 
     * @param value Value to set for the msdyn_msdyn_ocfbapplication_msdyn_ocbotchannelregistration property.
     */
    public set msdyn_msdyn_ocfbapplication_msdyn_ocbotchannelregistration(value: Msdyn_ocbotchannelregistration[] | undefined) {
        this._msdyn_msdyn_ocfbapplication_msdyn_ocbotchannelregistration = value;
    };
    /**
     * Gets the msdyn_msdyn_ocfbapplication_msdyn_ocfbpage property value. 
     * @returns a msdyn_ocfbpage
     */
    public get msdyn_msdyn_ocfbapplication_msdyn_ocfbpage() {
        return this._msdyn_msdyn_ocfbapplication_msdyn_ocfbpage;
    };
    /**
     * Sets the msdyn_msdyn_ocfbapplication_msdyn_ocfbpage property value. 
     * @param value Value to set for the msdyn_msdyn_ocfbapplication_msdyn_ocfbpage property.
     */
    public set msdyn_msdyn_ocfbapplication_msdyn_ocfbpage(value: Msdyn_ocfbpage[] | undefined) {
        this._msdyn_msdyn_ocfbapplication_msdyn_ocfbpage = value;
    };
    /**
     * Gets the msdyn_msdyn_ocfbapplication_msdyn_ocprovisioningstate property value. 
     * @returns a msdyn_ocprovisioningstate
     */
    public get msdyn_msdyn_ocfbapplication_msdyn_ocprovisioningstate() {
        return this._msdyn_msdyn_ocfbapplication_msdyn_ocprovisioningstate;
    };
    /**
     * Sets the msdyn_msdyn_ocfbapplication_msdyn_ocprovisioningstate property value. 
     * @param value Value to set for the msdyn_msdyn_ocfbapplication_msdyn_ocprovisioningstate property.
     */
    public set msdyn_msdyn_ocfbapplication_msdyn_ocprovisioningstate(value: Msdyn_ocprovisioningstate[] | undefined) {
        this._msdyn_msdyn_ocfbapplication_msdyn_ocprovisioningstate = value;
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
     * Gets the msdyn_ocfbapplication_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_ocfbapplication_AsyncOperations() {
        return this._msdyn_ocfbapplication_AsyncOperations;
    };
    /**
     * Sets the msdyn_ocfbapplication_AsyncOperations property value. 
     * @param value Value to set for the msdyn_ocfbapplication_AsyncOperations property.
     */
    public set msdyn_ocfbapplication_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_ocfbapplication_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_ocfbapplication_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_ocfbapplication_BulkDeleteFailures() {
        return this._msdyn_ocfbapplication_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_ocfbapplication_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_ocfbapplication_BulkDeleteFailures property.
     */
    public set msdyn_ocfbapplication_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_ocfbapplication_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_ocfbapplication_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_ocfbapplication_DuplicateBaseRecord() {
        return this._msdyn_ocfbapplication_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_ocfbapplication_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_ocfbapplication_DuplicateBaseRecord property.
     */
    public set msdyn_ocfbapplication_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_ocfbapplication_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_ocfbapplication_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_ocfbapplication_DuplicateMatchingRecord() {
        return this._msdyn_ocfbapplication_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_ocfbapplication_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_ocfbapplication_DuplicateMatchingRecord property.
     */
    public set msdyn_ocfbapplication_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_ocfbapplication_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_ocfbapplication_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_ocfbapplication_MailboxTrackingFolders() {
        return this._msdyn_ocfbapplication_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_ocfbapplication_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_ocfbapplication_MailboxTrackingFolders property.
     */
    public set msdyn_ocfbapplication_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_ocfbapplication_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_ocfbapplication_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_ocfbapplication_PrincipalObjectAttributeAccesses() {
        return this._msdyn_ocfbapplication_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_ocfbapplication_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_ocfbapplication_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_ocfbapplication_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_ocfbapplication_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_ocfbapplication_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_ocfbapplication_ProcessSession() {
        return this._msdyn_ocfbapplication_ProcessSession;
    };
    /**
     * Sets the msdyn_ocfbapplication_ProcessSession property value. 
     * @param value Value to set for the msdyn_ocfbapplication_ProcessSession property.
     */
    public set msdyn_ocfbapplication_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_ocfbapplication_ProcessSession = value;
    };
    /**
     * Gets the msdyn_ocfbapplication_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_ocfbapplication_SyncErrors() {
        return this._msdyn_ocfbapplication_SyncErrors;
    };
    /**
     * Sets the msdyn_ocfbapplication_SyncErrors property value. 
     * @param value Value to set for the msdyn_ocfbapplication_SyncErrors property.
     */
    public set msdyn_ocfbapplication_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_ocfbapplication_SyncErrors = value;
    };
    /**
     * Gets the msdyn_ocfbapplicationid property value. 
     * @returns a string
     */
    public get msdyn_ocfbapplicationid() {
        return this._msdyn_ocfbapplicationid;
    };
    /**
     * Sets the msdyn_ocfbapplicationid property value. 
     * @param value Value to set for the msdyn_ocfbapplicationid property.
     */
    public set msdyn_ocfbapplicationid(value: string | undefined) {
        this._msdyn_ocfbapplicationid = value;
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
        writer.writeStringValue("msdyn_fbapplicationid", this.msdyn_fbapplicationid);
        writer.writeStringValue("msdyn_fbapplicationsecret", this.msdyn_fbapplicationsecret);
        writer.writeStringValue("msdyn_fbcallbackuri", this.msdyn_fbcallbackuri);
        writer.writeStringValue("msdyn_fbverifytoken", this.msdyn_fbverifytoken);
        writer.writeCollectionOfObjectValues<Msdyn_ocbotchannelregistration>("msdyn_msdyn_ocfbapplication_msdyn_ocbotchannelregistration", this.msdyn_msdyn_ocfbapplication_msdyn_ocbotchannelregistration);
        writer.writeCollectionOfObjectValues<Msdyn_ocfbpage>("msdyn_msdyn_ocfbapplication_msdyn_ocfbpage", this.msdyn_msdyn_ocfbapplication_msdyn_ocfbpage);
        writer.writeCollectionOfObjectValues<Msdyn_ocprovisioningstate>("msdyn_msdyn_ocfbapplication_msdyn_ocprovisioningstate", this.msdyn_msdyn_ocfbapplication_msdyn_ocprovisioningstate);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_ocfbapplication_AsyncOperations", this.msdyn_ocfbapplication_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_ocfbapplication_BulkDeleteFailures", this.msdyn_ocfbapplication_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_ocfbapplication_DuplicateBaseRecord", this.msdyn_ocfbapplication_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_ocfbapplication_DuplicateMatchingRecord", this.msdyn_ocfbapplication_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_ocfbapplication_MailboxTrackingFolders", this.msdyn_ocfbapplication_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_ocfbapplication_PrincipalObjectAttributeAccesses", this.msdyn_ocfbapplication_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_ocfbapplication_ProcessSession", this.msdyn_ocfbapplication_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_ocfbapplication_SyncErrors", this.msdyn_ocfbapplication_SyncErrors);
        writer.writeStringValue("msdyn_ocfbapplicationid", this.msdyn_ocfbapplicationid);
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
