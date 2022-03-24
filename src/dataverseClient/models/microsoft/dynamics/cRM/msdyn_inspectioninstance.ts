import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createIncidentFromDiscriminatorValue} from './createIncidentFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_customerassetFromDiscriminatorValue} from './createMsdyn_customerassetFromDiscriminatorValue';
import {createMsdyn_inspectiondefinitionFromDiscriminatorValue} from './createMsdyn_inspectiondefinitionFromDiscriminatorValue';
import {createMsdyn_inspectionFromDiscriminatorValue} from './createMsdyn_inspectionFromDiscriminatorValue';
import {createMsdyn_inspectionresponseFromDiscriminatorValue} from './createMsdyn_inspectionresponseFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Incident, Mailboxtrackingfolder, Msdyn_customerasset, Msdyn_inspection, Msdyn_inspectiondefinition, Msdyn_inspectionresponse, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_inspectioninstance extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_caseid_value?: string | undefined;
    private __msdyn_customerassetid_value?: string | undefined;
    private __msdyn_inspectionresponseid_value?: string | undefined;
    private __msdyn_inspectiontemplateid_value?: string | undefined;
    private __msdyn_inspectiontemplateversionid_value?: string | undefined;
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
    private _msdyn_CaseId?: Incident | undefined;
    private _msdyn_completed?: string | undefined;
    private _msdyn_CustomerAssetId?: Msdyn_customerasset | undefined;
    private _msdyn_inspectioninstance_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_inspectioninstance_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_inspectioninstance_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_inspectioninstance_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_inspectioninstance_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_inspectioninstance_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_inspectioninstance_ProcessSession?: Processsession[] | undefined;
    private _msdyn_inspectioninstance_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_inspectioninstanceid?: string | undefined;
    private _msdyn_inspectionresponseid?: Msdyn_inspectionresponse | undefined;
    private _msdyn_InspectionTemplateId?: Msdyn_inspection | undefined;
    private _msdyn_InspectionTemplateVersionId?: Msdyn_inspectiondefinition | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_surveybounded?: string | undefined;
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
     * Gets the _msdyn_caseid_value property value. 
     * @returns a string
     */
    public get _msdyn_caseid_value() {
        return this.__msdyn_caseid_value;
    };
    /**
     * Sets the _msdyn_caseid_value property value. 
     * @param value Value to set for the _msdyn_caseid_value property.
     */
    public set _msdyn_caseid_value(value: string | undefined) {
        this.__msdyn_caseid_value = value;
    };
    /**
     * Gets the _msdyn_customerassetid_value property value. 
     * @returns a string
     */
    public get _msdyn_customerassetid_value() {
        return this.__msdyn_customerassetid_value;
    };
    /**
     * Sets the _msdyn_customerassetid_value property value. 
     * @param value Value to set for the _msdyn_customerassetid_value property.
     */
    public set _msdyn_customerassetid_value(value: string | undefined) {
        this.__msdyn_customerassetid_value = value;
    };
    /**
     * Gets the _msdyn_inspectionresponseid_value property value. 
     * @returns a string
     */
    public get _msdyn_inspectionresponseid_value() {
        return this.__msdyn_inspectionresponseid_value;
    };
    /**
     * Sets the _msdyn_inspectionresponseid_value property value. 
     * @param value Value to set for the _msdyn_inspectionresponseid_value property.
     */
    public set _msdyn_inspectionresponseid_value(value: string | undefined) {
        this.__msdyn_inspectionresponseid_value = value;
    };
    /**
     * Gets the _msdyn_inspectiontemplateid_value property value. 
     * @returns a string
     */
    public get _msdyn_inspectiontemplateid_value() {
        return this.__msdyn_inspectiontemplateid_value;
    };
    /**
     * Sets the _msdyn_inspectiontemplateid_value property value. 
     * @param value Value to set for the _msdyn_inspectiontemplateid_value property.
     */
    public set _msdyn_inspectiontemplateid_value(value: string | undefined) {
        this.__msdyn_inspectiontemplateid_value = value;
    };
    /**
     * Gets the _msdyn_inspectiontemplateversionid_value property value. 
     * @returns a string
     */
    public get _msdyn_inspectiontemplateversionid_value() {
        return this.__msdyn_inspectiontemplateversionid_value;
    };
    /**
     * Sets the _msdyn_inspectiontemplateversionid_value property value. 
     * @param value Value to set for the _msdyn_inspectiontemplateversionid_value property.
     */
    public set _msdyn_inspectiontemplateversionid_value(value: string | undefined) {
        this.__msdyn_inspectiontemplateversionid_value = value;
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
     * Instantiates a new msdyn_inspectioninstance and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_inspectioninstance)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_inspectioninstance)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_inspectioninstance)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_inspectioninstance)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_caseid_value": (o, n) => { (o as unknown as Msdyn_inspectioninstance)._msdyn_caseid_value = n.getStringValue(); },
            "_msdyn_customerassetid_value": (o, n) => { (o as unknown as Msdyn_inspectioninstance)._msdyn_customerassetid_value = n.getStringValue(); },
            "_msdyn_inspectionresponseid_value": (o, n) => { (o as unknown as Msdyn_inspectioninstance)._msdyn_inspectionresponseid_value = n.getStringValue(); },
            "_msdyn_inspectiontemplateid_value": (o, n) => { (o as unknown as Msdyn_inspectioninstance)._msdyn_inspectiontemplateid_value = n.getStringValue(); },
            "_msdyn_inspectiontemplateversionid_value": (o, n) => { (o as unknown as Msdyn_inspectioninstance)._msdyn_inspectiontemplateversionid_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_inspectioninstance)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_inspectioninstance)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_inspectioninstance)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_inspectioninstance)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_inspectioninstance).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_inspectioninstance).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_inspectioninstance).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_inspectioninstance).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_inspectioninstance).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_inspectioninstance).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_inspectioninstance).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_CaseId": (o, n) => { (o as unknown as Msdyn_inspectioninstance).msdyn_CaseId = n.getObjectValue<Incident>(createIncidentFromDiscriminatorValue); },
            "msdyn_completed": (o, n) => { (o as unknown as Msdyn_inspectioninstance).msdyn_completed = n.getStringValue(); },
            "msdyn_CustomerAssetId": (o, n) => { (o as unknown as Msdyn_inspectioninstance).msdyn_CustomerAssetId = n.getObjectValue<Msdyn_customerasset>(createMsdyn_customerassetFromDiscriminatorValue); },
            "msdyn_inspectioninstance_AsyncOperations": (o, n) => { (o as unknown as Msdyn_inspectioninstance).msdyn_inspectioninstance_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_inspectioninstance_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_inspectioninstance).msdyn_inspectioninstance_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_inspectioninstance_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_inspectioninstance).msdyn_inspectioninstance_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_inspectioninstance_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_inspectioninstance).msdyn_inspectioninstance_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_inspectioninstance_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_inspectioninstance).msdyn_inspectioninstance_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_inspectioninstance_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_inspectioninstance).msdyn_inspectioninstance_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_inspectioninstance_ProcessSession": (o, n) => { (o as unknown as Msdyn_inspectioninstance).msdyn_inspectioninstance_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_inspectioninstance_SyncErrors": (o, n) => { (o as unknown as Msdyn_inspectioninstance).msdyn_inspectioninstance_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_inspectioninstanceid": (o, n) => { (o as unknown as Msdyn_inspectioninstance).msdyn_inspectioninstanceid = n.getStringValue(); },
            "msdyn_inspectionresponseid": (o, n) => { (o as unknown as Msdyn_inspectioninstance).msdyn_inspectionresponseid = n.getObjectValue<Msdyn_inspectionresponse>(createMsdyn_inspectionresponseFromDiscriminatorValue); },
            "msdyn_InspectionTemplateId": (o, n) => { (o as unknown as Msdyn_inspectioninstance).msdyn_InspectionTemplateId = n.getObjectValue<Msdyn_inspection>(createMsdyn_inspectionFromDiscriminatorValue); },
            "msdyn_InspectionTemplateVersionId": (o, n) => { (o as unknown as Msdyn_inspectioninstance).msdyn_InspectionTemplateVersionId = n.getObjectValue<Msdyn_inspectiondefinition>(createMsdyn_inspectiondefinitionFromDiscriminatorValue); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_inspectioninstance).msdyn_name = n.getStringValue(); },
            "msdyn_surveybounded": (o, n) => { (o as unknown as Msdyn_inspectioninstance).msdyn_surveybounded = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_inspectioninstance).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_inspectioninstance).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_inspectioninstance).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_inspectioninstance).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_inspectioninstance).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_inspectioninstance).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_inspectioninstance).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_inspectioninstance).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_inspectioninstance).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_inspectioninstance).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_CaseId property value. 
     * @returns a incident
     */
    public get msdyn_CaseId() {
        return this._msdyn_CaseId;
    };
    /**
     * Sets the msdyn_CaseId property value. 
     * @param value Value to set for the msdyn_CaseId property.
     */
    public set msdyn_CaseId(value: Incident | undefined) {
        this._msdyn_CaseId = value;
    };
    /**
     * Gets the msdyn_completed property value. 
     * @returns a string
     */
    public get msdyn_completed() {
        return this._msdyn_completed;
    };
    /**
     * Sets the msdyn_completed property value. 
     * @param value Value to set for the msdyn_completed property.
     */
    public set msdyn_completed(value: string | undefined) {
        this._msdyn_completed = value;
    };
    /**
     * Gets the msdyn_CustomerAssetId property value. 
     * @returns a msdyn_customerasset
     */
    public get msdyn_CustomerAssetId() {
        return this._msdyn_CustomerAssetId;
    };
    /**
     * Sets the msdyn_CustomerAssetId property value. 
     * @param value Value to set for the msdyn_CustomerAssetId property.
     */
    public set msdyn_CustomerAssetId(value: Msdyn_customerasset | undefined) {
        this._msdyn_CustomerAssetId = value;
    };
    /**
     * Gets the msdyn_inspectioninstance_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_inspectioninstance_AsyncOperations() {
        return this._msdyn_inspectioninstance_AsyncOperations;
    };
    /**
     * Sets the msdyn_inspectioninstance_AsyncOperations property value. 
     * @param value Value to set for the msdyn_inspectioninstance_AsyncOperations property.
     */
    public set msdyn_inspectioninstance_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_inspectioninstance_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_inspectioninstance_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_inspectioninstance_BulkDeleteFailures() {
        return this._msdyn_inspectioninstance_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_inspectioninstance_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_inspectioninstance_BulkDeleteFailures property.
     */
    public set msdyn_inspectioninstance_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_inspectioninstance_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_inspectioninstance_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_inspectioninstance_DuplicateBaseRecord() {
        return this._msdyn_inspectioninstance_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_inspectioninstance_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_inspectioninstance_DuplicateBaseRecord property.
     */
    public set msdyn_inspectioninstance_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_inspectioninstance_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_inspectioninstance_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_inspectioninstance_DuplicateMatchingRecord() {
        return this._msdyn_inspectioninstance_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_inspectioninstance_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_inspectioninstance_DuplicateMatchingRecord property.
     */
    public set msdyn_inspectioninstance_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_inspectioninstance_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_inspectioninstance_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_inspectioninstance_MailboxTrackingFolders() {
        return this._msdyn_inspectioninstance_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_inspectioninstance_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_inspectioninstance_MailboxTrackingFolders property.
     */
    public set msdyn_inspectioninstance_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_inspectioninstance_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_inspectioninstance_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_inspectioninstance_PrincipalObjectAttributeAccesses() {
        return this._msdyn_inspectioninstance_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_inspectioninstance_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_inspectioninstance_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_inspectioninstance_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_inspectioninstance_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_inspectioninstance_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_inspectioninstance_ProcessSession() {
        return this._msdyn_inspectioninstance_ProcessSession;
    };
    /**
     * Sets the msdyn_inspectioninstance_ProcessSession property value. 
     * @param value Value to set for the msdyn_inspectioninstance_ProcessSession property.
     */
    public set msdyn_inspectioninstance_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_inspectioninstance_ProcessSession = value;
    };
    /**
     * Gets the msdyn_inspectioninstance_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_inspectioninstance_SyncErrors() {
        return this._msdyn_inspectioninstance_SyncErrors;
    };
    /**
     * Sets the msdyn_inspectioninstance_SyncErrors property value. 
     * @param value Value to set for the msdyn_inspectioninstance_SyncErrors property.
     */
    public set msdyn_inspectioninstance_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_inspectioninstance_SyncErrors = value;
    };
    /**
     * Gets the msdyn_inspectioninstanceid property value. 
     * @returns a string
     */
    public get msdyn_inspectioninstanceid() {
        return this._msdyn_inspectioninstanceid;
    };
    /**
     * Sets the msdyn_inspectioninstanceid property value. 
     * @param value Value to set for the msdyn_inspectioninstanceid property.
     */
    public set msdyn_inspectioninstanceid(value: string | undefined) {
        this._msdyn_inspectioninstanceid = value;
    };
    /**
     * Gets the msdyn_inspectionresponseid property value. 
     * @returns a msdyn_inspectionresponse
     */
    public get msdyn_inspectionresponseid() {
        return this._msdyn_inspectionresponseid;
    };
    /**
     * Sets the msdyn_inspectionresponseid property value. 
     * @param value Value to set for the msdyn_inspectionresponseid property.
     */
    public set msdyn_inspectionresponseid(value: Msdyn_inspectionresponse | undefined) {
        this._msdyn_inspectionresponseid = value;
    };
    /**
     * Gets the msdyn_InspectionTemplateId property value. 
     * @returns a msdyn_inspection
     */
    public get msdyn_InspectionTemplateId() {
        return this._msdyn_InspectionTemplateId;
    };
    /**
     * Sets the msdyn_InspectionTemplateId property value. 
     * @param value Value to set for the msdyn_InspectionTemplateId property.
     */
    public set msdyn_InspectionTemplateId(value: Msdyn_inspection | undefined) {
        this._msdyn_InspectionTemplateId = value;
    };
    /**
     * Gets the msdyn_InspectionTemplateVersionId property value. 
     * @returns a msdyn_inspectiondefinition
     */
    public get msdyn_InspectionTemplateVersionId() {
        return this._msdyn_InspectionTemplateVersionId;
    };
    /**
     * Sets the msdyn_InspectionTemplateVersionId property value. 
     * @param value Value to set for the msdyn_InspectionTemplateVersionId property.
     */
    public set msdyn_InspectionTemplateVersionId(value: Msdyn_inspectiondefinition | undefined) {
        this._msdyn_InspectionTemplateVersionId = value;
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
     * Gets the msdyn_surveybounded property value. 
     * @returns a string
     */
    public get msdyn_surveybounded() {
        return this._msdyn_surveybounded;
    };
    /**
     * Sets the msdyn_surveybounded property value. 
     * @param value Value to set for the msdyn_surveybounded property.
     */
    public set msdyn_surveybounded(value: string | undefined) {
        this._msdyn_surveybounded = value;
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
        writer.writeStringValue("_msdyn_caseid_value", this._msdyn_caseid_value);
        writer.writeStringValue("_msdyn_customerassetid_value", this._msdyn_customerassetid_value);
        writer.writeStringValue("_msdyn_inspectionresponseid_value", this._msdyn_inspectionresponseid_value);
        writer.writeStringValue("_msdyn_inspectiontemplateid_value", this._msdyn_inspectiontemplateid_value);
        writer.writeStringValue("_msdyn_inspectiontemplateversionid_value", this._msdyn_inspectiontemplateversionid_value);
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
        writer.writeObjectValue<Incident>("msdyn_CaseId", this.msdyn_CaseId);
        writer.writeStringValue("msdyn_completed", this.msdyn_completed);
        writer.writeObjectValue<Msdyn_customerasset>("msdyn_CustomerAssetId", this.msdyn_CustomerAssetId);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_inspectioninstance_AsyncOperations", this.msdyn_inspectioninstance_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_inspectioninstance_BulkDeleteFailures", this.msdyn_inspectioninstance_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_inspectioninstance_DuplicateBaseRecord", this.msdyn_inspectioninstance_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_inspectioninstance_DuplicateMatchingRecord", this.msdyn_inspectioninstance_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_inspectioninstance_MailboxTrackingFolders", this.msdyn_inspectioninstance_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_inspectioninstance_PrincipalObjectAttributeAccesses", this.msdyn_inspectioninstance_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_inspectioninstance_ProcessSession", this.msdyn_inspectioninstance_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_inspectioninstance_SyncErrors", this.msdyn_inspectioninstance_SyncErrors);
        writer.writeStringValue("msdyn_inspectioninstanceid", this.msdyn_inspectioninstanceid);
        writer.writeObjectValue<Msdyn_inspectionresponse>("msdyn_inspectionresponseid", this.msdyn_inspectionresponseid);
        writer.writeObjectValue<Msdyn_inspection>("msdyn_InspectionTemplateId", this.msdyn_InspectionTemplateId);
        writer.writeObjectValue<Msdyn_inspectiondefinition>("msdyn_InspectionTemplateVersionId", this.msdyn_InspectionTemplateVersionId);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeStringValue("msdyn_surveybounded", this.msdyn_surveybounded);
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
