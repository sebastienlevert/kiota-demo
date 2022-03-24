import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBookableresourcecategoryFromDiscriminatorValue} from './createBookableresourcecategoryFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_resourcerequirementFromDiscriminatorValue} from './createMsdyn_resourcerequirementFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createQueueitemFromDiscriminatorValue} from './createQueueitemFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Annotation, Asyncoperation, Bookableresourcecategory, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_resourcerequirement, Principal, Principalobjectattributeaccess, Processsession, Queueitem, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_resourcerequest extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_claimedby_value?: string | undefined;
    private __msdyn_requestedby_value?: string | undefined;
    private __msdyn_resourcerequirementid_value?: string | undefined;
    private __msdyn_roleid_value?: string | undefined;
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
    private _msdyn_claimedby?: Systemuser | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_positiondescription?: string | undefined;
    private _msdyn_requestedby?: Systemuser | undefined;
    private _msdyn_resourcerequest_Annotations?: Annotation[] | undefined;
    private _msdyn_resourcerequest_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_resourcerequest_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_resourcerequest_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_resourcerequest_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_resourcerequest_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_resourcerequest_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_resourcerequest_ProcessSession?: Processsession[] | undefined;
    private _msdyn_resourcerequest_QueueItems?: Queueitem[] | undefined;
    private _msdyn_resourcerequest_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_resourcerequestid?: string | undefined;
    private _msdyn_resourcerequirementid?: Msdyn_resourcerequirement | undefined;
    private _msdyn_roleid?: Bookableresourcecategory | undefined;
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
     * Gets the _msdyn_claimedby_value property value. 
     * @returns a string
     */
    public get _msdyn_claimedby_value() {
        return this.__msdyn_claimedby_value;
    };
    /**
     * Sets the _msdyn_claimedby_value property value. 
     * @param value Value to set for the _msdyn_claimedby_value property.
     */
    public set _msdyn_claimedby_value(value: string | undefined) {
        this.__msdyn_claimedby_value = value;
    };
    /**
     * Gets the _msdyn_requestedby_value property value. 
     * @returns a string
     */
    public get _msdyn_requestedby_value() {
        return this.__msdyn_requestedby_value;
    };
    /**
     * Sets the _msdyn_requestedby_value property value. 
     * @param value Value to set for the _msdyn_requestedby_value property.
     */
    public set _msdyn_requestedby_value(value: string | undefined) {
        this.__msdyn_requestedby_value = value;
    };
    /**
     * Gets the _msdyn_resourcerequirementid_value property value. 
     * @returns a string
     */
    public get _msdyn_resourcerequirementid_value() {
        return this.__msdyn_resourcerequirementid_value;
    };
    /**
     * Sets the _msdyn_resourcerequirementid_value property value. 
     * @param value Value to set for the _msdyn_resourcerequirementid_value property.
     */
    public set _msdyn_resourcerequirementid_value(value: string | undefined) {
        this.__msdyn_resourcerequirementid_value = value;
    };
    /**
     * Gets the _msdyn_roleid_value property value. 
     * @returns a string
     */
    public get _msdyn_roleid_value() {
        return this.__msdyn_roleid_value;
    };
    /**
     * Sets the _msdyn_roleid_value property value. 
     * @param value Value to set for the _msdyn_roleid_value property.
     */
    public set _msdyn_roleid_value(value: string | undefined) {
        this.__msdyn_roleid_value = value;
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
     * Instantiates a new msdyn_resourcerequest and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_resourcerequest)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_resourcerequest)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_resourcerequest)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_resourcerequest)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_claimedby_value": (o, n) => { (o as unknown as Msdyn_resourcerequest)._msdyn_claimedby_value = n.getStringValue(); },
            "_msdyn_requestedby_value": (o, n) => { (o as unknown as Msdyn_resourcerequest)._msdyn_requestedby_value = n.getStringValue(); },
            "_msdyn_resourcerequirementid_value": (o, n) => { (o as unknown as Msdyn_resourcerequest)._msdyn_resourcerequirementid_value = n.getStringValue(); },
            "_msdyn_roleid_value": (o, n) => { (o as unknown as Msdyn_resourcerequest)._msdyn_roleid_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_resourcerequest)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_resourcerequest)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_resourcerequest)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_resourcerequest)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_resourcerequest).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_resourcerequest).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_resourcerequest).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_resourcerequest).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_resourcerequest).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_resourcerequest).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_resourcerequest).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_claimedby": (o, n) => { (o as unknown as Msdyn_resourcerequest).msdyn_claimedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_resourcerequest).msdyn_name = n.getStringValue(); },
            "msdyn_positiondescription": (o, n) => { (o as unknown as Msdyn_resourcerequest).msdyn_positiondescription = n.getStringValue(); },
            "msdyn_requestedby": (o, n) => { (o as unknown as Msdyn_resourcerequest).msdyn_requestedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_resourcerequest_Annotations": (o, n) => { (o as unknown as Msdyn_resourcerequest).msdyn_resourcerequest_Annotations = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "msdyn_resourcerequest_AsyncOperations": (o, n) => { (o as unknown as Msdyn_resourcerequest).msdyn_resourcerequest_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_resourcerequest_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_resourcerequest).msdyn_resourcerequest_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_resourcerequest_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_resourcerequest).msdyn_resourcerequest_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_resourcerequest_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_resourcerequest).msdyn_resourcerequest_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_resourcerequest_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_resourcerequest).msdyn_resourcerequest_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_resourcerequest_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_resourcerequest).msdyn_resourcerequest_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_resourcerequest_ProcessSession": (o, n) => { (o as unknown as Msdyn_resourcerequest).msdyn_resourcerequest_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_resourcerequest_QueueItems": (o, n) => { (o as unknown as Msdyn_resourcerequest).msdyn_resourcerequest_QueueItems = n.getCollectionOfObjectValues<Queueitem>(createQueueitemFromDiscriminatorValue); },
            "msdyn_resourcerequest_SyncErrors": (o, n) => { (o as unknown as Msdyn_resourcerequest).msdyn_resourcerequest_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_resourcerequestid": (o, n) => { (o as unknown as Msdyn_resourcerequest).msdyn_resourcerequestid = n.getStringValue(); },
            "msdyn_resourcerequirementid": (o, n) => { (o as unknown as Msdyn_resourcerequest).msdyn_resourcerequirementid = n.getObjectValue<Msdyn_resourcerequirement>(createMsdyn_resourcerequirementFromDiscriminatorValue); },
            "msdyn_roleid": (o, n) => { (o as unknown as Msdyn_resourcerequest).msdyn_roleid = n.getObjectValue<Bookableresourcecategory>(createBookableresourcecategoryFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_resourcerequest).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_resourcerequest).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_resourcerequest).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_resourcerequest).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_resourcerequest).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_resourcerequest).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_resourcerequest).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_resourcerequest).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_resourcerequest).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_resourcerequest).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_claimedby property value. 
     * @returns a systemuser
     */
    public get msdyn_claimedby() {
        return this._msdyn_claimedby;
    };
    /**
     * Sets the msdyn_claimedby property value. 
     * @param value Value to set for the msdyn_claimedby property.
     */
    public set msdyn_claimedby(value: Systemuser | undefined) {
        this._msdyn_claimedby = value;
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
     * Gets the msdyn_positiondescription property value. 
     * @returns a string
     */
    public get msdyn_positiondescription() {
        return this._msdyn_positiondescription;
    };
    /**
     * Sets the msdyn_positiondescription property value. 
     * @param value Value to set for the msdyn_positiondescription property.
     */
    public set msdyn_positiondescription(value: string | undefined) {
        this._msdyn_positiondescription = value;
    };
    /**
     * Gets the msdyn_requestedby property value. 
     * @returns a systemuser
     */
    public get msdyn_requestedby() {
        return this._msdyn_requestedby;
    };
    /**
     * Sets the msdyn_requestedby property value. 
     * @param value Value to set for the msdyn_requestedby property.
     */
    public set msdyn_requestedby(value: Systemuser | undefined) {
        this._msdyn_requestedby = value;
    };
    /**
     * Gets the msdyn_resourcerequest_Annotations property value. 
     * @returns a annotation
     */
    public get msdyn_resourcerequest_Annotations() {
        return this._msdyn_resourcerequest_Annotations;
    };
    /**
     * Sets the msdyn_resourcerequest_Annotations property value. 
     * @param value Value to set for the msdyn_resourcerequest_Annotations property.
     */
    public set msdyn_resourcerequest_Annotations(value: Annotation[] | undefined) {
        this._msdyn_resourcerequest_Annotations = value;
    };
    /**
     * Gets the msdyn_resourcerequest_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_resourcerequest_AsyncOperations() {
        return this._msdyn_resourcerequest_AsyncOperations;
    };
    /**
     * Sets the msdyn_resourcerequest_AsyncOperations property value. 
     * @param value Value to set for the msdyn_resourcerequest_AsyncOperations property.
     */
    public set msdyn_resourcerequest_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_resourcerequest_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_resourcerequest_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_resourcerequest_BulkDeleteFailures() {
        return this._msdyn_resourcerequest_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_resourcerequest_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_resourcerequest_BulkDeleteFailures property.
     */
    public set msdyn_resourcerequest_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_resourcerequest_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_resourcerequest_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_resourcerequest_DuplicateBaseRecord() {
        return this._msdyn_resourcerequest_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_resourcerequest_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_resourcerequest_DuplicateBaseRecord property.
     */
    public set msdyn_resourcerequest_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_resourcerequest_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_resourcerequest_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_resourcerequest_DuplicateMatchingRecord() {
        return this._msdyn_resourcerequest_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_resourcerequest_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_resourcerequest_DuplicateMatchingRecord property.
     */
    public set msdyn_resourcerequest_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_resourcerequest_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_resourcerequest_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_resourcerequest_MailboxTrackingFolders() {
        return this._msdyn_resourcerequest_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_resourcerequest_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_resourcerequest_MailboxTrackingFolders property.
     */
    public set msdyn_resourcerequest_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_resourcerequest_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_resourcerequest_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_resourcerequest_PrincipalObjectAttributeAccesses() {
        return this._msdyn_resourcerequest_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_resourcerequest_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_resourcerequest_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_resourcerequest_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_resourcerequest_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_resourcerequest_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_resourcerequest_ProcessSession() {
        return this._msdyn_resourcerequest_ProcessSession;
    };
    /**
     * Sets the msdyn_resourcerequest_ProcessSession property value. 
     * @param value Value to set for the msdyn_resourcerequest_ProcessSession property.
     */
    public set msdyn_resourcerequest_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_resourcerequest_ProcessSession = value;
    };
    /**
     * Gets the msdyn_resourcerequest_QueueItems property value. 
     * @returns a queueitem
     */
    public get msdyn_resourcerequest_QueueItems() {
        return this._msdyn_resourcerequest_QueueItems;
    };
    /**
     * Sets the msdyn_resourcerequest_QueueItems property value. 
     * @param value Value to set for the msdyn_resourcerequest_QueueItems property.
     */
    public set msdyn_resourcerequest_QueueItems(value: Queueitem[] | undefined) {
        this._msdyn_resourcerequest_QueueItems = value;
    };
    /**
     * Gets the msdyn_resourcerequest_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_resourcerequest_SyncErrors() {
        return this._msdyn_resourcerequest_SyncErrors;
    };
    /**
     * Sets the msdyn_resourcerequest_SyncErrors property value. 
     * @param value Value to set for the msdyn_resourcerequest_SyncErrors property.
     */
    public set msdyn_resourcerequest_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_resourcerequest_SyncErrors = value;
    };
    /**
     * Gets the msdyn_resourcerequestid property value. 
     * @returns a string
     */
    public get msdyn_resourcerequestid() {
        return this._msdyn_resourcerequestid;
    };
    /**
     * Sets the msdyn_resourcerequestid property value. 
     * @param value Value to set for the msdyn_resourcerequestid property.
     */
    public set msdyn_resourcerequestid(value: string | undefined) {
        this._msdyn_resourcerequestid = value;
    };
    /**
     * Gets the msdyn_resourcerequirementid property value. 
     * @returns a msdyn_resourcerequirement
     */
    public get msdyn_resourcerequirementid() {
        return this._msdyn_resourcerequirementid;
    };
    /**
     * Sets the msdyn_resourcerequirementid property value. 
     * @param value Value to set for the msdyn_resourcerequirementid property.
     */
    public set msdyn_resourcerequirementid(value: Msdyn_resourcerequirement | undefined) {
        this._msdyn_resourcerequirementid = value;
    };
    /**
     * Gets the msdyn_roleid property value. 
     * @returns a bookableresourcecategory
     */
    public get msdyn_roleid() {
        return this._msdyn_roleid;
    };
    /**
     * Sets the msdyn_roleid property value. 
     * @param value Value to set for the msdyn_roleid property.
     */
    public set msdyn_roleid(value: Bookableresourcecategory | undefined) {
        this._msdyn_roleid = value;
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
        writer.writeStringValue("_msdyn_claimedby_value", this._msdyn_claimedby_value);
        writer.writeStringValue("_msdyn_requestedby_value", this._msdyn_requestedby_value);
        writer.writeStringValue("_msdyn_resourcerequirementid_value", this._msdyn_resourcerequirementid_value);
        writer.writeStringValue("_msdyn_roleid_value", this._msdyn_roleid_value);
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
        writer.writeObjectValue<Systemuser>("msdyn_claimedby", this.msdyn_claimedby);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeStringValue("msdyn_positiondescription", this.msdyn_positiondescription);
        writer.writeObjectValue<Systemuser>("msdyn_requestedby", this.msdyn_requestedby);
        writer.writeCollectionOfObjectValues<Annotation>("msdyn_resourcerequest_Annotations", this.msdyn_resourcerequest_Annotations);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_resourcerequest_AsyncOperations", this.msdyn_resourcerequest_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_resourcerequest_BulkDeleteFailures", this.msdyn_resourcerequest_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_resourcerequest_DuplicateBaseRecord", this.msdyn_resourcerequest_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_resourcerequest_DuplicateMatchingRecord", this.msdyn_resourcerequest_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_resourcerequest_MailboxTrackingFolders", this.msdyn_resourcerequest_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_resourcerequest_PrincipalObjectAttributeAccesses", this.msdyn_resourcerequest_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_resourcerequest_ProcessSession", this.msdyn_resourcerequest_ProcessSession);
        writer.writeCollectionOfObjectValues<Queueitem>("msdyn_resourcerequest_QueueItems", this.msdyn_resourcerequest_QueueItems);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_resourcerequest_SyncErrors", this.msdyn_resourcerequest_SyncErrors);
        writer.writeStringValue("msdyn_resourcerequestid", this.msdyn_resourcerequestid);
        writer.writeObjectValue<Msdyn_resourcerequirement>("msdyn_resourcerequirementid", this.msdyn_resourcerequirementid);
        writer.writeObjectValue<Bookableresourcecategory>("msdyn_roleid", this.msdyn_roleid);
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
