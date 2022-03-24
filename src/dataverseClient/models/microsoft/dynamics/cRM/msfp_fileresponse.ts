import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createFileattachmentFromDiscriminatorValue} from './createFileattachmentFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsfp_questionFromDiscriminatorValue} from './createMsfp_questionFromDiscriminatorValue';
import {createMsfp_surveyFromDiscriminatorValue} from './createMsfp_surveyFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Fileattachment, Mailboxtrackingfolder, Msfp_question, Msfp_survey, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msfp_fileresponse extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msfp_question_value?: string | undefined;
    private __msfp_survey_value?: string | undefined;
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
    private _msfp_file1?: string | undefined;
    private _msfp_file1_name?: string | undefined;
    private _msfp_file10?: string | undefined;
    private _msfp_file10_name?: string | undefined;
    private _msfp_file2?: string | undefined;
    private _msfp_file2_name?: string | undefined;
    private _msfp_file3?: string | undefined;
    private _msfp_file3_name?: string | undefined;
    private _msfp_file4?: string | undefined;
    private _msfp_file4_name?: string | undefined;
    private _msfp_file5?: string | undefined;
    private _msfp_file5_name?: string | undefined;
    private _msfp_file6?: string | undefined;
    private _msfp_file6_name?: string | undefined;
    private _msfp_file7?: string | undefined;
    private _msfp_file7_name?: string | undefined;
    private _msfp_file8?: string | undefined;
    private _msfp_file8_name?: string | undefined;
    private _msfp_file9?: string | undefined;
    private _msfp_file9_name?: string | undefined;
    private _msfp_fileresponse_AsyncOperations?: Asyncoperation[] | undefined;
    private _msfp_fileresponse_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msfp_fileresponse_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msfp_fileresponse_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msfp_fileresponse_FileAttachments?: Fileattachment[] | undefined;
    private _msfp_fileresponse_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msfp_fileresponse_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msfp_fileresponse_ProcessSession?: Processsession[] | undefined;
    private _msfp_fileresponse_SyncErrors?: Syncerror[] | undefined;
    private _msfp_fileresponseid?: string | undefined;
    private _msfp_name?: string | undefined;
    private _msfp_otherproperties?: string | undefined;
    private _msfp_question?: Msfp_question | undefined;
    private _msfp_sourcequestionidentifier?: string | undefined;
    private _msfp_sourcesurveyidentifier?: string | undefined;
    private _msfp_survey?: Msfp_survey | undefined;
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
     * Gets the _msfp_question_value property value. 
     * @returns a string
     */
    public get _msfp_question_value() {
        return this.__msfp_question_value;
    };
    /**
     * Sets the _msfp_question_value property value. 
     * @param value Value to set for the _msfp_question_value property.
     */
    public set _msfp_question_value(value: string | undefined) {
        this.__msfp_question_value = value;
    };
    /**
     * Gets the _msfp_survey_value property value. 
     * @returns a string
     */
    public get _msfp_survey_value() {
        return this.__msfp_survey_value;
    };
    /**
     * Sets the _msfp_survey_value property value. 
     * @param value Value to set for the _msfp_survey_value property.
     */
    public set _msfp_survey_value(value: string | undefined) {
        this.__msfp_survey_value = value;
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
     * Instantiates a new msfp_fileresponse and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msfp_fileresponse)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msfp_fileresponse)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msfp_fileresponse)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msfp_fileresponse)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msfp_question_value": (o, n) => { (o as unknown as Msfp_fileresponse)._msfp_question_value = n.getStringValue(); },
            "_msfp_survey_value": (o, n) => { (o as unknown as Msfp_fileresponse)._msfp_survey_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msfp_fileresponse)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msfp_fileresponse)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msfp_fileresponse)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msfp_fileresponse)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msfp_fileresponse).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msfp_fileresponse).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msfp_fileresponse).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msfp_fileresponse).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msfp_fileresponse).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msfp_fileresponse).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msfp_fileresponse).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msfp_file1": (o, n) => { (o as unknown as Msfp_fileresponse).msfp_file1 = n.getStringValue(); },
            "msfp_file1_name": (o, n) => { (o as unknown as Msfp_fileresponse).msfp_file1_name = n.getStringValue(); },
            "msfp_file10": (o, n) => { (o as unknown as Msfp_fileresponse).msfp_file10 = n.getStringValue(); },
            "msfp_file10_name": (o, n) => { (o as unknown as Msfp_fileresponse).msfp_file10_name = n.getStringValue(); },
            "msfp_file2": (o, n) => { (o as unknown as Msfp_fileresponse).msfp_file2 = n.getStringValue(); },
            "msfp_file2_name": (o, n) => { (o as unknown as Msfp_fileresponse).msfp_file2_name = n.getStringValue(); },
            "msfp_file3": (o, n) => { (o as unknown as Msfp_fileresponse).msfp_file3 = n.getStringValue(); },
            "msfp_file3_name": (o, n) => { (o as unknown as Msfp_fileresponse).msfp_file3_name = n.getStringValue(); },
            "msfp_file4": (o, n) => { (o as unknown as Msfp_fileresponse).msfp_file4 = n.getStringValue(); },
            "msfp_file4_name": (o, n) => { (o as unknown as Msfp_fileresponse).msfp_file4_name = n.getStringValue(); },
            "msfp_file5": (o, n) => { (o as unknown as Msfp_fileresponse).msfp_file5 = n.getStringValue(); },
            "msfp_file5_name": (o, n) => { (o as unknown as Msfp_fileresponse).msfp_file5_name = n.getStringValue(); },
            "msfp_file6": (o, n) => { (o as unknown as Msfp_fileresponse).msfp_file6 = n.getStringValue(); },
            "msfp_file6_name": (o, n) => { (o as unknown as Msfp_fileresponse).msfp_file6_name = n.getStringValue(); },
            "msfp_file7": (o, n) => { (o as unknown as Msfp_fileresponse).msfp_file7 = n.getStringValue(); },
            "msfp_file7_name": (o, n) => { (o as unknown as Msfp_fileresponse).msfp_file7_name = n.getStringValue(); },
            "msfp_file8": (o, n) => { (o as unknown as Msfp_fileresponse).msfp_file8 = n.getStringValue(); },
            "msfp_file8_name": (o, n) => { (o as unknown as Msfp_fileresponse).msfp_file8_name = n.getStringValue(); },
            "msfp_file9": (o, n) => { (o as unknown as Msfp_fileresponse).msfp_file9 = n.getStringValue(); },
            "msfp_file9_name": (o, n) => { (o as unknown as Msfp_fileresponse).msfp_file9_name = n.getStringValue(); },
            "msfp_fileresponse_AsyncOperations": (o, n) => { (o as unknown as Msfp_fileresponse).msfp_fileresponse_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msfp_fileresponse_BulkDeleteFailures": (o, n) => { (o as unknown as Msfp_fileresponse).msfp_fileresponse_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msfp_fileresponse_DuplicateBaseRecord": (o, n) => { (o as unknown as Msfp_fileresponse).msfp_fileresponse_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msfp_fileresponse_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msfp_fileresponse).msfp_fileresponse_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msfp_fileresponse_FileAttachments": (o, n) => { (o as unknown as Msfp_fileresponse).msfp_fileresponse_FileAttachments = n.getCollectionOfObjectValues<Fileattachment>(createFileattachmentFromDiscriminatorValue); },
            "msfp_fileresponse_MailboxTrackingFolders": (o, n) => { (o as unknown as Msfp_fileresponse).msfp_fileresponse_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msfp_fileresponse_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msfp_fileresponse).msfp_fileresponse_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msfp_fileresponse_ProcessSession": (o, n) => { (o as unknown as Msfp_fileresponse).msfp_fileresponse_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msfp_fileresponse_SyncErrors": (o, n) => { (o as unknown as Msfp_fileresponse).msfp_fileresponse_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msfp_fileresponseid": (o, n) => { (o as unknown as Msfp_fileresponse).msfp_fileresponseid = n.getStringValue(); },
            "msfp_name": (o, n) => { (o as unknown as Msfp_fileresponse).msfp_name = n.getStringValue(); },
            "msfp_otherproperties": (o, n) => { (o as unknown as Msfp_fileresponse).msfp_otherproperties = n.getStringValue(); },
            "msfp_question": (o, n) => { (o as unknown as Msfp_fileresponse).msfp_question = n.getObjectValue<Msfp_question>(createMsfp_questionFromDiscriminatorValue); },
            "msfp_sourcequestionidentifier": (o, n) => { (o as unknown as Msfp_fileresponse).msfp_sourcequestionidentifier = n.getStringValue(); },
            "msfp_sourcesurveyidentifier": (o, n) => { (o as unknown as Msfp_fileresponse).msfp_sourcesurveyidentifier = n.getStringValue(); },
            "msfp_survey": (o, n) => { (o as unknown as Msfp_fileresponse).msfp_survey = n.getObjectValue<Msfp_survey>(createMsfp_surveyFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msfp_fileresponse).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msfp_fileresponse).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msfp_fileresponse).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msfp_fileresponse).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msfp_fileresponse).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msfp_fileresponse).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msfp_fileresponse).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msfp_fileresponse).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msfp_fileresponse).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msfp_fileresponse).versionnumber = n.getNumberValue(); },
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
     * Gets the msfp_file1 property value. 
     * @returns a binary
     */
    public get msfp_file1() {
        return this._msfp_file1;
    };
    /**
     * Sets the msfp_file1 property value. 
     * @param value Value to set for the msfp_file1 property.
     */
    public set msfp_file1(value: string | undefined) {
        this._msfp_file1 = value;
    };
    /**
     * Gets the msfp_file1_name property value. 
     * @returns a string
     */
    public get msfp_file1_name() {
        return this._msfp_file1_name;
    };
    /**
     * Sets the msfp_file1_name property value. 
     * @param value Value to set for the msfp_file1_name property.
     */
    public set msfp_file1_name(value: string | undefined) {
        this._msfp_file1_name = value;
    };
    /**
     * Gets the msfp_file10 property value. 
     * @returns a binary
     */
    public get msfp_file10() {
        return this._msfp_file10;
    };
    /**
     * Sets the msfp_file10 property value. 
     * @param value Value to set for the msfp_file10 property.
     */
    public set msfp_file10(value: string | undefined) {
        this._msfp_file10 = value;
    };
    /**
     * Gets the msfp_file10_name property value. 
     * @returns a string
     */
    public get msfp_file10_name() {
        return this._msfp_file10_name;
    };
    /**
     * Sets the msfp_file10_name property value. 
     * @param value Value to set for the msfp_file10_name property.
     */
    public set msfp_file10_name(value: string | undefined) {
        this._msfp_file10_name = value;
    };
    /**
     * Gets the msfp_file2 property value. 
     * @returns a binary
     */
    public get msfp_file2() {
        return this._msfp_file2;
    };
    /**
     * Sets the msfp_file2 property value. 
     * @param value Value to set for the msfp_file2 property.
     */
    public set msfp_file2(value: string | undefined) {
        this._msfp_file2 = value;
    };
    /**
     * Gets the msfp_file2_name property value. 
     * @returns a string
     */
    public get msfp_file2_name() {
        return this._msfp_file2_name;
    };
    /**
     * Sets the msfp_file2_name property value. 
     * @param value Value to set for the msfp_file2_name property.
     */
    public set msfp_file2_name(value: string | undefined) {
        this._msfp_file2_name = value;
    };
    /**
     * Gets the msfp_file3 property value. 
     * @returns a binary
     */
    public get msfp_file3() {
        return this._msfp_file3;
    };
    /**
     * Sets the msfp_file3 property value. 
     * @param value Value to set for the msfp_file3 property.
     */
    public set msfp_file3(value: string | undefined) {
        this._msfp_file3 = value;
    };
    /**
     * Gets the msfp_file3_name property value. 
     * @returns a string
     */
    public get msfp_file3_name() {
        return this._msfp_file3_name;
    };
    /**
     * Sets the msfp_file3_name property value. 
     * @param value Value to set for the msfp_file3_name property.
     */
    public set msfp_file3_name(value: string | undefined) {
        this._msfp_file3_name = value;
    };
    /**
     * Gets the msfp_file4 property value. 
     * @returns a binary
     */
    public get msfp_file4() {
        return this._msfp_file4;
    };
    /**
     * Sets the msfp_file4 property value. 
     * @param value Value to set for the msfp_file4 property.
     */
    public set msfp_file4(value: string | undefined) {
        this._msfp_file4 = value;
    };
    /**
     * Gets the msfp_file4_name property value. 
     * @returns a string
     */
    public get msfp_file4_name() {
        return this._msfp_file4_name;
    };
    /**
     * Sets the msfp_file4_name property value. 
     * @param value Value to set for the msfp_file4_name property.
     */
    public set msfp_file4_name(value: string | undefined) {
        this._msfp_file4_name = value;
    };
    /**
     * Gets the msfp_file5 property value. 
     * @returns a binary
     */
    public get msfp_file5() {
        return this._msfp_file5;
    };
    /**
     * Sets the msfp_file5 property value. 
     * @param value Value to set for the msfp_file5 property.
     */
    public set msfp_file5(value: string | undefined) {
        this._msfp_file5 = value;
    };
    /**
     * Gets the msfp_file5_name property value. 
     * @returns a string
     */
    public get msfp_file5_name() {
        return this._msfp_file5_name;
    };
    /**
     * Sets the msfp_file5_name property value. 
     * @param value Value to set for the msfp_file5_name property.
     */
    public set msfp_file5_name(value: string | undefined) {
        this._msfp_file5_name = value;
    };
    /**
     * Gets the msfp_file6 property value. 
     * @returns a binary
     */
    public get msfp_file6() {
        return this._msfp_file6;
    };
    /**
     * Sets the msfp_file6 property value. 
     * @param value Value to set for the msfp_file6 property.
     */
    public set msfp_file6(value: string | undefined) {
        this._msfp_file6 = value;
    };
    /**
     * Gets the msfp_file6_name property value. 
     * @returns a string
     */
    public get msfp_file6_name() {
        return this._msfp_file6_name;
    };
    /**
     * Sets the msfp_file6_name property value. 
     * @param value Value to set for the msfp_file6_name property.
     */
    public set msfp_file6_name(value: string | undefined) {
        this._msfp_file6_name = value;
    };
    /**
     * Gets the msfp_file7 property value. 
     * @returns a binary
     */
    public get msfp_file7() {
        return this._msfp_file7;
    };
    /**
     * Sets the msfp_file7 property value. 
     * @param value Value to set for the msfp_file7 property.
     */
    public set msfp_file7(value: string | undefined) {
        this._msfp_file7 = value;
    };
    /**
     * Gets the msfp_file7_name property value. 
     * @returns a string
     */
    public get msfp_file7_name() {
        return this._msfp_file7_name;
    };
    /**
     * Sets the msfp_file7_name property value. 
     * @param value Value to set for the msfp_file7_name property.
     */
    public set msfp_file7_name(value: string | undefined) {
        this._msfp_file7_name = value;
    };
    /**
     * Gets the msfp_file8 property value. 
     * @returns a binary
     */
    public get msfp_file8() {
        return this._msfp_file8;
    };
    /**
     * Sets the msfp_file8 property value. 
     * @param value Value to set for the msfp_file8 property.
     */
    public set msfp_file8(value: string | undefined) {
        this._msfp_file8 = value;
    };
    /**
     * Gets the msfp_file8_name property value. 
     * @returns a string
     */
    public get msfp_file8_name() {
        return this._msfp_file8_name;
    };
    /**
     * Sets the msfp_file8_name property value. 
     * @param value Value to set for the msfp_file8_name property.
     */
    public set msfp_file8_name(value: string | undefined) {
        this._msfp_file8_name = value;
    };
    /**
     * Gets the msfp_file9 property value. 
     * @returns a binary
     */
    public get msfp_file9() {
        return this._msfp_file9;
    };
    /**
     * Sets the msfp_file9 property value. 
     * @param value Value to set for the msfp_file9 property.
     */
    public set msfp_file9(value: string | undefined) {
        this._msfp_file9 = value;
    };
    /**
     * Gets the msfp_file9_name property value. 
     * @returns a string
     */
    public get msfp_file9_name() {
        return this._msfp_file9_name;
    };
    /**
     * Sets the msfp_file9_name property value. 
     * @param value Value to set for the msfp_file9_name property.
     */
    public set msfp_file9_name(value: string | undefined) {
        this._msfp_file9_name = value;
    };
    /**
     * Gets the msfp_fileresponse_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msfp_fileresponse_AsyncOperations() {
        return this._msfp_fileresponse_AsyncOperations;
    };
    /**
     * Sets the msfp_fileresponse_AsyncOperations property value. 
     * @param value Value to set for the msfp_fileresponse_AsyncOperations property.
     */
    public set msfp_fileresponse_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msfp_fileresponse_AsyncOperations = value;
    };
    /**
     * Gets the msfp_fileresponse_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msfp_fileresponse_BulkDeleteFailures() {
        return this._msfp_fileresponse_BulkDeleteFailures;
    };
    /**
     * Sets the msfp_fileresponse_BulkDeleteFailures property value. 
     * @param value Value to set for the msfp_fileresponse_BulkDeleteFailures property.
     */
    public set msfp_fileresponse_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msfp_fileresponse_BulkDeleteFailures = value;
    };
    /**
     * Gets the msfp_fileresponse_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msfp_fileresponse_DuplicateBaseRecord() {
        return this._msfp_fileresponse_DuplicateBaseRecord;
    };
    /**
     * Sets the msfp_fileresponse_DuplicateBaseRecord property value. 
     * @param value Value to set for the msfp_fileresponse_DuplicateBaseRecord property.
     */
    public set msfp_fileresponse_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msfp_fileresponse_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msfp_fileresponse_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msfp_fileresponse_DuplicateMatchingRecord() {
        return this._msfp_fileresponse_DuplicateMatchingRecord;
    };
    /**
     * Sets the msfp_fileresponse_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msfp_fileresponse_DuplicateMatchingRecord property.
     */
    public set msfp_fileresponse_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msfp_fileresponse_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msfp_fileresponse_FileAttachments property value. 
     * @returns a fileattachment
     */
    public get msfp_fileresponse_FileAttachments() {
        return this._msfp_fileresponse_FileAttachments;
    };
    /**
     * Sets the msfp_fileresponse_FileAttachments property value. 
     * @param value Value to set for the msfp_fileresponse_FileAttachments property.
     */
    public set msfp_fileresponse_FileAttachments(value: Fileattachment[] | undefined) {
        this._msfp_fileresponse_FileAttachments = value;
    };
    /**
     * Gets the msfp_fileresponse_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msfp_fileresponse_MailboxTrackingFolders() {
        return this._msfp_fileresponse_MailboxTrackingFolders;
    };
    /**
     * Sets the msfp_fileresponse_MailboxTrackingFolders property value. 
     * @param value Value to set for the msfp_fileresponse_MailboxTrackingFolders property.
     */
    public set msfp_fileresponse_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msfp_fileresponse_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msfp_fileresponse_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msfp_fileresponse_PrincipalObjectAttributeAccesses() {
        return this._msfp_fileresponse_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msfp_fileresponse_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msfp_fileresponse_PrincipalObjectAttributeAccesses property.
     */
    public set msfp_fileresponse_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msfp_fileresponse_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msfp_fileresponse_ProcessSession property value. 
     * @returns a processsession
     */
    public get msfp_fileresponse_ProcessSession() {
        return this._msfp_fileresponse_ProcessSession;
    };
    /**
     * Sets the msfp_fileresponse_ProcessSession property value. 
     * @param value Value to set for the msfp_fileresponse_ProcessSession property.
     */
    public set msfp_fileresponse_ProcessSession(value: Processsession[] | undefined) {
        this._msfp_fileresponse_ProcessSession = value;
    };
    /**
     * Gets the msfp_fileresponse_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msfp_fileresponse_SyncErrors() {
        return this._msfp_fileresponse_SyncErrors;
    };
    /**
     * Sets the msfp_fileresponse_SyncErrors property value. 
     * @param value Value to set for the msfp_fileresponse_SyncErrors property.
     */
    public set msfp_fileresponse_SyncErrors(value: Syncerror[] | undefined) {
        this._msfp_fileresponse_SyncErrors = value;
    };
    /**
     * Gets the msfp_fileresponseid property value. 
     * @returns a string
     */
    public get msfp_fileresponseid() {
        return this._msfp_fileresponseid;
    };
    /**
     * Sets the msfp_fileresponseid property value. 
     * @param value Value to set for the msfp_fileresponseid property.
     */
    public set msfp_fileresponseid(value: string | undefined) {
        this._msfp_fileresponseid = value;
    };
    /**
     * Gets the msfp_name property value. 
     * @returns a string
     */
    public get msfp_name() {
        return this._msfp_name;
    };
    /**
     * Sets the msfp_name property value. 
     * @param value Value to set for the msfp_name property.
     */
    public set msfp_name(value: string | undefined) {
        this._msfp_name = value;
    };
    /**
     * Gets the msfp_otherproperties property value. 
     * @returns a string
     */
    public get msfp_otherproperties() {
        return this._msfp_otherproperties;
    };
    /**
     * Sets the msfp_otherproperties property value. 
     * @param value Value to set for the msfp_otherproperties property.
     */
    public set msfp_otherproperties(value: string | undefined) {
        this._msfp_otherproperties = value;
    };
    /**
     * Gets the msfp_question property value. 
     * @returns a msfp_question
     */
    public get msfp_question() {
        return this._msfp_question;
    };
    /**
     * Sets the msfp_question property value. 
     * @param value Value to set for the msfp_question property.
     */
    public set msfp_question(value: Msfp_question | undefined) {
        this._msfp_question = value;
    };
    /**
     * Gets the msfp_sourcequestionidentifier property value. 
     * @returns a string
     */
    public get msfp_sourcequestionidentifier() {
        return this._msfp_sourcequestionidentifier;
    };
    /**
     * Sets the msfp_sourcequestionidentifier property value. 
     * @param value Value to set for the msfp_sourcequestionidentifier property.
     */
    public set msfp_sourcequestionidentifier(value: string | undefined) {
        this._msfp_sourcequestionidentifier = value;
    };
    /**
     * Gets the msfp_sourcesurveyidentifier property value. 
     * @returns a string
     */
    public get msfp_sourcesurveyidentifier() {
        return this._msfp_sourcesurveyidentifier;
    };
    /**
     * Sets the msfp_sourcesurveyidentifier property value. 
     * @param value Value to set for the msfp_sourcesurveyidentifier property.
     */
    public set msfp_sourcesurveyidentifier(value: string | undefined) {
        this._msfp_sourcesurveyidentifier = value;
    };
    /**
     * Gets the msfp_survey property value. 
     * @returns a msfp_survey
     */
    public get msfp_survey() {
        return this._msfp_survey;
    };
    /**
     * Sets the msfp_survey property value. 
     * @param value Value to set for the msfp_survey property.
     */
    public set msfp_survey(value: Msfp_survey | undefined) {
        this._msfp_survey = value;
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
        writer.writeStringValue("_msfp_question_value", this._msfp_question_value);
        writer.writeStringValue("_msfp_survey_value", this._msfp_survey_value);
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
        writer.writeStringValue("msfp_file1", this.msfp_file1);
        writer.writeStringValue("msfp_file1_name", this.msfp_file1_name);
        writer.writeStringValue("msfp_file10", this.msfp_file10);
        writer.writeStringValue("msfp_file10_name", this.msfp_file10_name);
        writer.writeStringValue("msfp_file2", this.msfp_file2);
        writer.writeStringValue("msfp_file2_name", this.msfp_file2_name);
        writer.writeStringValue("msfp_file3", this.msfp_file3);
        writer.writeStringValue("msfp_file3_name", this.msfp_file3_name);
        writer.writeStringValue("msfp_file4", this.msfp_file4);
        writer.writeStringValue("msfp_file4_name", this.msfp_file4_name);
        writer.writeStringValue("msfp_file5", this.msfp_file5);
        writer.writeStringValue("msfp_file5_name", this.msfp_file5_name);
        writer.writeStringValue("msfp_file6", this.msfp_file6);
        writer.writeStringValue("msfp_file6_name", this.msfp_file6_name);
        writer.writeStringValue("msfp_file7", this.msfp_file7);
        writer.writeStringValue("msfp_file7_name", this.msfp_file7_name);
        writer.writeStringValue("msfp_file8", this.msfp_file8);
        writer.writeStringValue("msfp_file8_name", this.msfp_file8_name);
        writer.writeStringValue("msfp_file9", this.msfp_file9);
        writer.writeStringValue("msfp_file9_name", this.msfp_file9_name);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msfp_fileresponse_AsyncOperations", this.msfp_fileresponse_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msfp_fileresponse_BulkDeleteFailures", this.msfp_fileresponse_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msfp_fileresponse_DuplicateBaseRecord", this.msfp_fileresponse_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msfp_fileresponse_DuplicateMatchingRecord", this.msfp_fileresponse_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Fileattachment>("msfp_fileresponse_FileAttachments", this.msfp_fileresponse_FileAttachments);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msfp_fileresponse_MailboxTrackingFolders", this.msfp_fileresponse_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msfp_fileresponse_PrincipalObjectAttributeAccesses", this.msfp_fileresponse_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msfp_fileresponse_ProcessSession", this.msfp_fileresponse_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msfp_fileresponse_SyncErrors", this.msfp_fileresponse_SyncErrors);
        writer.writeStringValue("msfp_fileresponseid", this.msfp_fileresponseid);
        writer.writeStringValue("msfp_name", this.msfp_name);
        writer.writeStringValue("msfp_otherproperties", this.msfp_otherproperties);
        writer.writeObjectValue<Msfp_question>("msfp_question", this.msfp_question);
        writer.writeStringValue("msfp_sourcequestionidentifier", this.msfp_sourcequestionidentifier);
        writer.writeStringValue("msfp_sourcesurveyidentifier", this.msfp_sourcesurveyidentifier);
        writer.writeObjectValue<Msfp_survey>("msfp_survey", this.msfp_survey);
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
