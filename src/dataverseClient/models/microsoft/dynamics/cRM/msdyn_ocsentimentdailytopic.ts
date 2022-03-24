import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_ocliveworkitemFromDiscriminatorValue} from './createMsdyn_ocliveworkitemFromDiscriminatorValue';
import {createMsdyn_ocsentimentdailytopickeywordFromDiscriminatorValue} from './createMsdyn_ocsentimentdailytopickeywordFromDiscriminatorValue';
import {createMsdyn_ocsentimentdailytopictrendingFromDiscriminatorValue} from './createMsdyn_ocsentimentdailytopictrendingFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_ocliveworkitem, Msdyn_ocsentimentdailytopickeyword, Msdyn_ocsentimentdailytopictrending, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_ocsentimentdailytopic extends Crmbaseentity implements Parsable {
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
    private _msdyn_conversationcount?: number | undefined;
    private _msdyn_conversationexample?: string | undefined;
    private _msdyn_msdyn_ocsentimentdailytopic_msdyn_ocliveworkitem_dailytopicid?: Msdyn_ocliveworkitem[] | undefined;
    private _msdyn_msdyn_ocsentimentdailytopic_msdyn_ocsentimentdailytopickeyword_dailytopicid?: Msdyn_ocsentimentdailytopickeyword[] | undefined;
    private _msdyn_msdyn_ocsentimentdailytopic_msdyn_ocsentimentdailytopictrending_basetopicid?: Msdyn_ocsentimentdailytopictrending[] | undefined;
    private _msdyn_msdyn_ocsentimentdailytopic_msdyn_ocsentimentdailytopictrending_dailytopicid?: Msdyn_ocsentimentdailytopictrending[] | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_ocsentimentdailytopic_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_ocsentimentdailytopic_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_ocsentimentdailytopic_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_ocsentimentdailytopic_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_ocsentimentdailytopic_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_ocsentimentdailytopic_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_ocsentimentdailytopic_ProcessSession?: Processsession[] | undefined;
    private _msdyn_ocsentimentdailytopic_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_ocsentimentdailytopicid?: string | undefined;
    private _msdyn_sentimentdriverintradayweightimpact?: number | undefined;
    private _msdyn_sentimentscore?: number | undefined;
    private _msdyn_topiccountpercentage?: number | undefined;
    private _msdyn_topicdate?: Date | undefined;
    private _msdyn_topicindex?: number | undefined;
    private _msdyn_topicname?: string | undefined;
    private _msdyn_weeklyid?: string | undefined;
    private _msdyn_weeklytopicid?: string | undefined;
    private _msdyn_weeklytopicname?: string | undefined;
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
     * Instantiates a new msdyn_ocsentimentdailytopic and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_ocsentimentdailytopic)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_ocsentimentdailytopic)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_ocsentimentdailytopic)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_ocsentimentdailytopic)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_ocsentimentdailytopic)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_ocsentimentdailytopic)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_ocsentimentdailytopic)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_ocsentimentdailytopic)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_ocsentimentdailytopic).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_ocsentimentdailytopic).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_ocsentimentdailytopic).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_ocsentimentdailytopic).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_ocsentimentdailytopic).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_ocsentimentdailytopic).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_ocsentimentdailytopic).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_conversationcount": (o, n) => { (o as unknown as Msdyn_ocsentimentdailytopic).msdyn_conversationcount = n.getNumberValue(); },
            "msdyn_conversationexample": (o, n) => { (o as unknown as Msdyn_ocsentimentdailytopic).msdyn_conversationexample = n.getStringValue(); },
            "msdyn_msdyn_ocsentimentdailytopic_msdyn_ocliveworkitem_dailytopicid": (o, n) => { (o as unknown as Msdyn_ocsentimentdailytopic).msdyn_msdyn_ocsentimentdailytopic_msdyn_ocliveworkitem_dailytopicid = n.getCollectionOfObjectValues<Msdyn_ocliveworkitem>(createMsdyn_ocliveworkitemFromDiscriminatorValue); },
            "msdyn_msdyn_ocsentimentdailytopic_msdyn_ocsentimentdailytopickeyword_dailytopicid": (o, n) => { (o as unknown as Msdyn_ocsentimentdailytopic).msdyn_msdyn_ocsentimentdailytopic_msdyn_ocsentimentdailytopickeyword_dailytopicid = n.getCollectionOfObjectValues<Msdyn_ocsentimentdailytopickeyword>(createMsdyn_ocsentimentdailytopickeywordFromDiscriminatorValue); },
            "msdyn_msdyn_ocsentimentdailytopic_msdyn_ocsentimentdailytopictrending_basetopicid": (o, n) => { (o as unknown as Msdyn_ocsentimentdailytopic).msdyn_msdyn_ocsentimentdailytopic_msdyn_ocsentimentdailytopictrending_basetopicid = n.getCollectionOfObjectValues<Msdyn_ocsentimentdailytopictrending>(createMsdyn_ocsentimentdailytopictrendingFromDiscriminatorValue); },
            "msdyn_msdyn_ocsentimentdailytopic_msdyn_ocsentimentdailytopictrending_dailytopicid": (o, n) => { (o as unknown as Msdyn_ocsentimentdailytopic).msdyn_msdyn_ocsentimentdailytopic_msdyn_ocsentimentdailytopictrending_dailytopicid = n.getCollectionOfObjectValues<Msdyn_ocsentimentdailytopictrending>(createMsdyn_ocsentimentdailytopictrendingFromDiscriminatorValue); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_ocsentimentdailytopic).msdyn_name = n.getStringValue(); },
            "msdyn_ocsentimentdailytopic_AsyncOperations": (o, n) => { (o as unknown as Msdyn_ocsentimentdailytopic).msdyn_ocsentimentdailytopic_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_ocsentimentdailytopic_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_ocsentimentdailytopic).msdyn_ocsentimentdailytopic_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_ocsentimentdailytopic_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_ocsentimentdailytopic).msdyn_ocsentimentdailytopic_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_ocsentimentdailytopic_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_ocsentimentdailytopic).msdyn_ocsentimentdailytopic_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_ocsentimentdailytopic_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_ocsentimentdailytopic).msdyn_ocsentimentdailytopic_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_ocsentimentdailytopic_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_ocsentimentdailytopic).msdyn_ocsentimentdailytopic_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_ocsentimentdailytopic_ProcessSession": (o, n) => { (o as unknown as Msdyn_ocsentimentdailytopic).msdyn_ocsentimentdailytopic_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_ocsentimentdailytopic_SyncErrors": (o, n) => { (o as unknown as Msdyn_ocsentimentdailytopic).msdyn_ocsentimentdailytopic_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_ocsentimentdailytopicid": (o, n) => { (o as unknown as Msdyn_ocsentimentdailytopic).msdyn_ocsentimentdailytopicid = n.getStringValue(); },
            "msdyn_sentimentdriverintradayweightimpact": (o, n) => { (o as unknown as Msdyn_ocsentimentdailytopic).msdyn_sentimentdriverintradayweightimpact = n.getNumberValue(); },
            "msdyn_sentimentscore": (o, n) => { (o as unknown as Msdyn_ocsentimentdailytopic).msdyn_sentimentscore = n.getNumberValue(); },
            "msdyn_topiccountpercentage": (o, n) => { (o as unknown as Msdyn_ocsentimentdailytopic).msdyn_topiccountpercentage = n.getNumberValue(); },
            "msdyn_topicdate": (o, n) => { (o as unknown as Msdyn_ocsentimentdailytopic).msdyn_topicdate = n.getDateValue(); },
            "msdyn_topicindex": (o, n) => { (o as unknown as Msdyn_ocsentimentdailytopic).msdyn_topicindex = n.getNumberValue(); },
            "msdyn_topicname": (o, n) => { (o as unknown as Msdyn_ocsentimentdailytopic).msdyn_topicname = n.getStringValue(); },
            "msdyn_weeklyid": (o, n) => { (o as unknown as Msdyn_ocsentimentdailytopic).msdyn_weeklyid = n.getStringValue(); },
            "msdyn_weeklytopicid": (o, n) => { (o as unknown as Msdyn_ocsentimentdailytopic).msdyn_weeklytopicid = n.getStringValue(); },
            "msdyn_weeklytopicname": (o, n) => { (o as unknown as Msdyn_ocsentimentdailytopic).msdyn_weeklytopicname = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_ocsentimentdailytopic).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_ocsentimentdailytopic).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_ocsentimentdailytopic).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_ocsentimentdailytopic).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_ocsentimentdailytopic).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_ocsentimentdailytopic).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_ocsentimentdailytopic).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_ocsentimentdailytopic).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_ocsentimentdailytopic).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_ocsentimentdailytopic).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_conversationcount property value. 
     * @returns a integer
     */
    public get msdyn_conversationcount() {
        return this._msdyn_conversationcount;
    };
    /**
     * Sets the msdyn_conversationcount property value. 
     * @param value Value to set for the msdyn_conversationcount property.
     */
    public set msdyn_conversationcount(value: number | undefined) {
        this._msdyn_conversationcount = value;
    };
    /**
     * Gets the msdyn_conversationexample property value. 
     * @returns a string
     */
    public get msdyn_conversationexample() {
        return this._msdyn_conversationexample;
    };
    /**
     * Sets the msdyn_conversationexample property value. 
     * @param value Value to set for the msdyn_conversationexample property.
     */
    public set msdyn_conversationexample(value: string | undefined) {
        this._msdyn_conversationexample = value;
    };
    /**
     * Gets the msdyn_msdyn_ocsentimentdailytopic_msdyn_ocliveworkitem_dailytopicid property value. 
     * @returns a msdyn_ocliveworkitem
     */
    public get msdyn_msdyn_ocsentimentdailytopic_msdyn_ocliveworkitem_dailytopicid() {
        return this._msdyn_msdyn_ocsentimentdailytopic_msdyn_ocliveworkitem_dailytopicid;
    };
    /**
     * Sets the msdyn_msdyn_ocsentimentdailytopic_msdyn_ocliveworkitem_dailytopicid property value. 
     * @param value Value to set for the msdyn_msdyn_ocsentimentdailytopic_msdyn_ocliveworkitem_dailytopicid property.
     */
    public set msdyn_msdyn_ocsentimentdailytopic_msdyn_ocliveworkitem_dailytopicid(value: Msdyn_ocliveworkitem[] | undefined) {
        this._msdyn_msdyn_ocsentimentdailytopic_msdyn_ocliveworkitem_dailytopicid = value;
    };
    /**
     * Gets the msdyn_msdyn_ocsentimentdailytopic_msdyn_ocsentimentdailytopickeyword_dailytopicid property value. 
     * @returns a msdyn_ocsentimentdailytopickeyword
     */
    public get msdyn_msdyn_ocsentimentdailytopic_msdyn_ocsentimentdailytopickeyword_dailytopicid() {
        return this._msdyn_msdyn_ocsentimentdailytopic_msdyn_ocsentimentdailytopickeyword_dailytopicid;
    };
    /**
     * Sets the msdyn_msdyn_ocsentimentdailytopic_msdyn_ocsentimentdailytopickeyword_dailytopicid property value. 
     * @param value Value to set for the msdyn_msdyn_ocsentimentdailytopic_msdyn_ocsentimentdailytopickeyword_dailytopicid property.
     */
    public set msdyn_msdyn_ocsentimentdailytopic_msdyn_ocsentimentdailytopickeyword_dailytopicid(value: Msdyn_ocsentimentdailytopickeyword[] | undefined) {
        this._msdyn_msdyn_ocsentimentdailytopic_msdyn_ocsentimentdailytopickeyword_dailytopicid = value;
    };
    /**
     * Gets the msdyn_msdyn_ocsentimentdailytopic_msdyn_ocsentimentdailytopictrending_basetopicid property value. 
     * @returns a msdyn_ocsentimentdailytopictrending
     */
    public get msdyn_msdyn_ocsentimentdailytopic_msdyn_ocsentimentdailytopictrending_basetopicid() {
        return this._msdyn_msdyn_ocsentimentdailytopic_msdyn_ocsentimentdailytopictrending_basetopicid;
    };
    /**
     * Sets the msdyn_msdyn_ocsentimentdailytopic_msdyn_ocsentimentdailytopictrending_basetopicid property value. 
     * @param value Value to set for the msdyn_msdyn_ocsentimentdailytopic_msdyn_ocsentimentdailytopictrending_basetopicid property.
     */
    public set msdyn_msdyn_ocsentimentdailytopic_msdyn_ocsentimentdailytopictrending_basetopicid(value: Msdyn_ocsentimentdailytopictrending[] | undefined) {
        this._msdyn_msdyn_ocsentimentdailytopic_msdyn_ocsentimentdailytopictrending_basetopicid = value;
    };
    /**
     * Gets the msdyn_msdyn_ocsentimentdailytopic_msdyn_ocsentimentdailytopictrending_dailytopicid property value. 
     * @returns a msdyn_ocsentimentdailytopictrending
     */
    public get msdyn_msdyn_ocsentimentdailytopic_msdyn_ocsentimentdailytopictrending_dailytopicid() {
        return this._msdyn_msdyn_ocsentimentdailytopic_msdyn_ocsentimentdailytopictrending_dailytopicid;
    };
    /**
     * Sets the msdyn_msdyn_ocsentimentdailytopic_msdyn_ocsentimentdailytopictrending_dailytopicid property value. 
     * @param value Value to set for the msdyn_msdyn_ocsentimentdailytopic_msdyn_ocsentimentdailytopictrending_dailytopicid property.
     */
    public set msdyn_msdyn_ocsentimentdailytopic_msdyn_ocsentimentdailytopictrending_dailytopicid(value: Msdyn_ocsentimentdailytopictrending[] | undefined) {
        this._msdyn_msdyn_ocsentimentdailytopic_msdyn_ocsentimentdailytopictrending_dailytopicid = value;
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
     * Gets the msdyn_ocsentimentdailytopic_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_ocsentimentdailytopic_AsyncOperations() {
        return this._msdyn_ocsentimentdailytopic_AsyncOperations;
    };
    /**
     * Sets the msdyn_ocsentimentdailytopic_AsyncOperations property value. 
     * @param value Value to set for the msdyn_ocsentimentdailytopic_AsyncOperations property.
     */
    public set msdyn_ocsentimentdailytopic_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_ocsentimentdailytopic_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_ocsentimentdailytopic_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_ocsentimentdailytopic_BulkDeleteFailures() {
        return this._msdyn_ocsentimentdailytopic_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_ocsentimentdailytopic_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_ocsentimentdailytopic_BulkDeleteFailures property.
     */
    public set msdyn_ocsentimentdailytopic_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_ocsentimentdailytopic_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_ocsentimentdailytopic_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_ocsentimentdailytopic_DuplicateBaseRecord() {
        return this._msdyn_ocsentimentdailytopic_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_ocsentimentdailytopic_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_ocsentimentdailytopic_DuplicateBaseRecord property.
     */
    public set msdyn_ocsentimentdailytopic_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_ocsentimentdailytopic_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_ocsentimentdailytopic_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_ocsentimentdailytopic_DuplicateMatchingRecord() {
        return this._msdyn_ocsentimentdailytopic_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_ocsentimentdailytopic_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_ocsentimentdailytopic_DuplicateMatchingRecord property.
     */
    public set msdyn_ocsentimentdailytopic_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_ocsentimentdailytopic_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_ocsentimentdailytopic_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_ocsentimentdailytopic_MailboxTrackingFolders() {
        return this._msdyn_ocsentimentdailytopic_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_ocsentimentdailytopic_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_ocsentimentdailytopic_MailboxTrackingFolders property.
     */
    public set msdyn_ocsentimentdailytopic_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_ocsentimentdailytopic_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_ocsentimentdailytopic_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_ocsentimentdailytopic_PrincipalObjectAttributeAccesses() {
        return this._msdyn_ocsentimentdailytopic_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_ocsentimentdailytopic_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_ocsentimentdailytopic_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_ocsentimentdailytopic_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_ocsentimentdailytopic_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_ocsentimentdailytopic_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_ocsentimentdailytopic_ProcessSession() {
        return this._msdyn_ocsentimentdailytopic_ProcessSession;
    };
    /**
     * Sets the msdyn_ocsentimentdailytopic_ProcessSession property value. 
     * @param value Value to set for the msdyn_ocsentimentdailytopic_ProcessSession property.
     */
    public set msdyn_ocsentimentdailytopic_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_ocsentimentdailytopic_ProcessSession = value;
    };
    /**
     * Gets the msdyn_ocsentimentdailytopic_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_ocsentimentdailytopic_SyncErrors() {
        return this._msdyn_ocsentimentdailytopic_SyncErrors;
    };
    /**
     * Sets the msdyn_ocsentimentdailytopic_SyncErrors property value. 
     * @param value Value to set for the msdyn_ocsentimentdailytopic_SyncErrors property.
     */
    public set msdyn_ocsentimentdailytopic_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_ocsentimentdailytopic_SyncErrors = value;
    };
    /**
     * Gets the msdyn_ocsentimentdailytopicid property value. 
     * @returns a string
     */
    public get msdyn_ocsentimentdailytopicid() {
        return this._msdyn_ocsentimentdailytopicid;
    };
    /**
     * Sets the msdyn_ocsentimentdailytopicid property value. 
     * @param value Value to set for the msdyn_ocsentimentdailytopicid property.
     */
    public set msdyn_ocsentimentdailytopicid(value: string | undefined) {
        this._msdyn_ocsentimentdailytopicid = value;
    };
    /**
     * Gets the msdyn_sentimentdriverintradayweightimpact property value. 
     * @returns a double
     */
    public get msdyn_sentimentdriverintradayweightimpact() {
        return this._msdyn_sentimentdriverintradayweightimpact;
    };
    /**
     * Sets the msdyn_sentimentdriverintradayweightimpact property value. 
     * @param value Value to set for the msdyn_sentimentdriverintradayweightimpact property.
     */
    public set msdyn_sentimentdriverintradayweightimpact(value: number | undefined) {
        this._msdyn_sentimentdriverintradayweightimpact = value;
    };
    /**
     * Gets the msdyn_sentimentscore property value. 
     * @returns a double
     */
    public get msdyn_sentimentscore() {
        return this._msdyn_sentimentscore;
    };
    /**
     * Sets the msdyn_sentimentscore property value. 
     * @param value Value to set for the msdyn_sentimentscore property.
     */
    public set msdyn_sentimentscore(value: number | undefined) {
        this._msdyn_sentimentscore = value;
    };
    /**
     * Gets the msdyn_topiccountpercentage property value. 
     * @returns a double
     */
    public get msdyn_topiccountpercentage() {
        return this._msdyn_topiccountpercentage;
    };
    /**
     * Sets the msdyn_topiccountpercentage property value. 
     * @param value Value to set for the msdyn_topiccountpercentage property.
     */
    public set msdyn_topiccountpercentage(value: number | undefined) {
        this._msdyn_topiccountpercentage = value;
    };
    /**
     * Gets the msdyn_topicdate property value. 
     * @returns a Date
     */
    public get msdyn_topicdate() {
        return this._msdyn_topicdate;
    };
    /**
     * Sets the msdyn_topicdate property value. 
     * @param value Value to set for the msdyn_topicdate property.
     */
    public set msdyn_topicdate(value: Date | undefined) {
        this._msdyn_topicdate = value;
    };
    /**
     * Gets the msdyn_topicindex property value. 
     * @returns a integer
     */
    public get msdyn_topicindex() {
        return this._msdyn_topicindex;
    };
    /**
     * Sets the msdyn_topicindex property value. 
     * @param value Value to set for the msdyn_topicindex property.
     */
    public set msdyn_topicindex(value: number | undefined) {
        this._msdyn_topicindex = value;
    };
    /**
     * Gets the msdyn_topicname property value. 
     * @returns a string
     */
    public get msdyn_topicname() {
        return this._msdyn_topicname;
    };
    /**
     * Sets the msdyn_topicname property value. 
     * @param value Value to set for the msdyn_topicname property.
     */
    public set msdyn_topicname(value: string | undefined) {
        this._msdyn_topicname = value;
    };
    /**
     * Gets the msdyn_weeklyid property value. 
     * @returns a string
     */
    public get msdyn_weeklyid() {
        return this._msdyn_weeklyid;
    };
    /**
     * Sets the msdyn_weeklyid property value. 
     * @param value Value to set for the msdyn_weeklyid property.
     */
    public set msdyn_weeklyid(value: string | undefined) {
        this._msdyn_weeklyid = value;
    };
    /**
     * Gets the msdyn_weeklytopicid property value. 
     * @returns a string
     */
    public get msdyn_weeklytopicid() {
        return this._msdyn_weeklytopicid;
    };
    /**
     * Sets the msdyn_weeklytopicid property value. 
     * @param value Value to set for the msdyn_weeklytopicid property.
     */
    public set msdyn_weeklytopicid(value: string | undefined) {
        this._msdyn_weeklytopicid = value;
    };
    /**
     * Gets the msdyn_weeklytopicname property value. 
     * @returns a string
     */
    public get msdyn_weeklytopicname() {
        return this._msdyn_weeklytopicname;
    };
    /**
     * Sets the msdyn_weeklytopicname property value. 
     * @param value Value to set for the msdyn_weeklytopicname property.
     */
    public set msdyn_weeklytopicname(value: string | undefined) {
        this._msdyn_weeklytopicname = value;
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
        writer.writeNumberValue("msdyn_conversationcount", this.msdyn_conversationcount);
        writer.writeStringValue("msdyn_conversationexample", this.msdyn_conversationexample);
        writer.writeCollectionOfObjectValues<Msdyn_ocliveworkitem>("msdyn_msdyn_ocsentimentdailytopic_msdyn_ocliveworkitem_dailytopicid", this.msdyn_msdyn_ocsentimentdailytopic_msdyn_ocliveworkitem_dailytopicid);
        writer.writeCollectionOfObjectValues<Msdyn_ocsentimentdailytopickeyword>("msdyn_msdyn_ocsentimentdailytopic_msdyn_ocsentimentdailytopickeyword_dailytopicid", this.msdyn_msdyn_ocsentimentdailytopic_msdyn_ocsentimentdailytopickeyword_dailytopicid);
        writer.writeCollectionOfObjectValues<Msdyn_ocsentimentdailytopictrending>("msdyn_msdyn_ocsentimentdailytopic_msdyn_ocsentimentdailytopictrending_basetopicid", this.msdyn_msdyn_ocsentimentdailytopic_msdyn_ocsentimentdailytopictrending_basetopicid);
        writer.writeCollectionOfObjectValues<Msdyn_ocsentimentdailytopictrending>("msdyn_msdyn_ocsentimentdailytopic_msdyn_ocsentimentdailytopictrending_dailytopicid", this.msdyn_msdyn_ocsentimentdailytopic_msdyn_ocsentimentdailytopictrending_dailytopicid);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_ocsentimentdailytopic_AsyncOperations", this.msdyn_ocsentimentdailytopic_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_ocsentimentdailytopic_BulkDeleteFailures", this.msdyn_ocsentimentdailytopic_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_ocsentimentdailytopic_DuplicateBaseRecord", this.msdyn_ocsentimentdailytopic_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_ocsentimentdailytopic_DuplicateMatchingRecord", this.msdyn_ocsentimentdailytopic_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_ocsentimentdailytopic_MailboxTrackingFolders", this.msdyn_ocsentimentdailytopic_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_ocsentimentdailytopic_PrincipalObjectAttributeAccesses", this.msdyn_ocsentimentdailytopic_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_ocsentimentdailytopic_ProcessSession", this.msdyn_ocsentimentdailytopic_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_ocsentimentdailytopic_SyncErrors", this.msdyn_ocsentimentdailytopic_SyncErrors);
        writer.writeStringValue("msdyn_ocsentimentdailytopicid", this.msdyn_ocsentimentdailytopicid);
        writer.writeNumberValue("msdyn_sentimentdriverintradayweightimpact", this.msdyn_sentimentdriverintradayweightimpact);
        writer.writeNumberValue("msdyn_sentimentscore", this.msdyn_sentimentscore);
        writer.writeNumberValue("msdyn_topiccountpercentage", this.msdyn_topiccountpercentage);
        writer.writeDateValue("msdyn_topicdate", this.msdyn_topicdate);
        writer.writeNumberValue("msdyn_topicindex", this.msdyn_topicindex);
        writer.writeStringValue("msdyn_topicname", this.msdyn_topicname);
        writer.writeStringValue("msdyn_weeklyid", this.msdyn_weeklyid);
        writer.writeStringValue("msdyn_weeklytopicid", this.msdyn_weeklytopicid);
        writer.writeStringValue("msdyn_weeklytopicname", this.msdyn_weeklytopicname);
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
